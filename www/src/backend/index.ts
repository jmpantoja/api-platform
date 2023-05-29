import {cookies} from "next/headers";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {normalizeCollection, normalizeError, normalizeItem} from "@/backend/normalize";


const buildHeaders = (shared?: boolean): HeadersInit => {

  const headers: HeadersInit = {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/ld+json',
  }

  if (shared !== true) {
    const token = cookies().get('token')
    if (token) {
      headers['Authorization'] = `Bearer ${token.value}`
    }
  }

  return headers
}

const buildUrl = ({resource, params}: Pick<BackendProps, 'resource' | 'params'>) => {
  const url = new URL(`/api/${resource}`, 'http://caddy')

  Object.entries(params || {})
    .forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })

  return url.toString()
}

interface BackendProps {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  resource: string,
  params?: { [key: string]: any },
  shared?: boolean,
  cache?: RequestCache,
  next?: NextFetchRequestConfig,
  body?: BodyInit
}


export const backend = async <T>({method, resource, params, shared, cache, body, next}: BackendProps) => {
  const url = buildUrl({resource, params})
  const headers = buildHeaders(shared)

  return await fetch(url, {
    cache,
    method,
    headers,
    body,
    next
  })
    .then(async (res) => {
      const body = await res.json()
      const status = res.status

      if (status === 200) {
        return 'hydra:member' in body ? normalizeCollection<T>(body) : normalizeItem<T>(body)
      }

      return normalizeError(res, body)
    })
}


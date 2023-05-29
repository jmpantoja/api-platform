interface HydraCollection {
  'hydra:member': any,
  'hydra:totalItems': number,
  'hydra:view': {
    '@id': string
    'hydra:first': string
    'hydra:last': string
    'hydra:previous': string
    'hydra:next': string
  }
}

interface CollectionResponse<T> {
  isOk: boolean,
  status: 200,
  statusText: 'OK',
  type: 'collection',
  total: number,
  links: {
    current: string,
    first: string,
    last: string,
    previous: string,
    next: string,
  },
  data: T[]
}

export const normalizeCollection = <T>(body: HydraCollection): CollectionResponse<T> => {
  const {'hydra:member': data, 'hydra:totalItems': total, 'hydra:view': view} = body
  // const data = body['hydra:member']
  return {
    isOk: true,
    status: 200,
    statusText: 'OK',
    type: 'collection',
    total: total,
    links: {
      current: view['@id'],
      first: view['hydra:first'],
      last: view['hydra:last'],
      previous: view['hydra:previous'],
      next: view['hydra:next'],
    },
    data
  }
}

interface ItemResponse<T> {
  isOk: true,
  status: 200,
  statusText: 'OK',
  type: 'item'
  data: T
}

export const normalizeItem = <T>(body: T): ItemResponse<T> => {
  return {
    isOk: true,
    status: 200,
    statusText: 'OK',
    type: 'item',
    data: body
  }
}

interface HydraError {
  'hydra:title': string,
  'hydra:description': string,
  'trace': any,
  'code': number,
  'message': string,
}

interface ErrorResponse {
  isOk: false,
  status: number,
  statusText: string,
  type: 'error',
  data: {
    title: string,
    description: string
  }
}

export const normalizeError = (res: Response, body: HydraError): ErrorResponse => {
  const {'hydra:title': title, 'hydra:description': description, trace, code, message, ...rest} = body
  return {
    isOk: false,
    status: res.status,
    statusText: res.statusText,
    type: 'error',
    data: {
      title: title ?? code,
      description: description ?? message
    }
  }
}

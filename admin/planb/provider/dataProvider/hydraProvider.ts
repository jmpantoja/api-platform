import type {AxiosInstance, AxiosRequestConfig} from "axios";
import {stringify} from "query-string";
import type {DataProvider,} from "@pankod/refine-core";
import {buildUrlQuery} from "@planb/provider/dataProvider/buildUrlQuery";


const HydraProvider = (
  httpClient: AxiosInstance,
): DataProvider => ({
  getList: async ({resource, pagination, filters, sort}) => {
    const query = buildUrlQuery({
      filters,
      sort,
      pagination,
    })

    const {data} = await httpClient.get(`${resource}?${query}`);

    return {
      data: data['hydra:member'],
      total: data['hydra:totalItems']
    };
  },

  getMany: async ({resource, ids}) => {
    const {data} = await httpClient.get(`${resource}?${stringify({id: ids})}`);

    return {
      data: data['hydra:member'],
      total: data['hydra:totalItems']
    };
  },

  create: async ({resource, variables}) => {
    const url = `${resource}`;

    const {data} = await httpClient.post(url, variables);

    return {
      data,
    };
  },

  createMany: async ({resource, variables}) => {
    const response = await Promise.all(
      variables.map(async (param) => {
        const {data} = await httpClient.post(`${resource}`, param);
        return data;
      }),
    );

    return {data: response};
  },

  update: async ({resource, id, variables}) => {
    const url = `${resource}/${id}`;

    const {data} = await httpClient.put(url, variables);

    return {
      data,
    };
  },

  updateMany: async ({resource, ids, variables}) => {
    const response = await Promise.all(
      ids.map(async (id) => {
        const {data} = await httpClient.patch(`${resource}/${id}`, variables);
        return data;
      }),
    );

    return {data: response};
  },

  getOne: async ({resource, id}) => {
    const url = `${resource}/${id}`;
    const {data} = await httpClient.get(url);

    return {
      data,
    };
  },

  deleteOne: async ({resource, id, variables}) => {
    const url = `${resource}/${id}`;
    const {data} = await httpClient.delete(url, (variables as AxiosRequestConfig));

    return {
      data,
    };
  },

  deleteMany: async ({resource, ids, variables}) => {
    const response = await Promise.all(
      ids.map(async (id) => {
        const {data} = await httpClient.delete(`${resource}/${id}`, (variables as AxiosRequestConfig));
        return data;
      }),
    );
    return {data: response};
  },

  getApiUrl: () => {
    return 'apiUrl';
  },

  // custom: async ({url, method, filters, sort, payload, query, headers}) => {
  //   let requestUrl = `${url}?`;
  //
  //   if (sort) {
  //     const generatedSort = generateSort(sort);
  //     if (generatedSort) {
  //       const {_sort, _order} = generatedSort;
  //       const sortQuery = {
  //         _sort: _sort.join(","),
  //         _order: _order.join(","),
  //       };
  //       requestUrl = `${requestUrl}&${stringify(sortQuery)}`;
  //     }
  //   }
  //
  //   if (filters) {
  //     const filterQuery = generateFilter(filters);
  //     requestUrl = `${requestUrl}&${stringify(filterQuery)}`;
  //   }
  //
  //   if (query) {
  //     requestUrl = `${requestUrl}&${stringify(query)}`;
  //   }
  //
  //   if (headers) {
  //     httpClient.defaults.headers = {
  //       ...httpClient.defaults.headers,
  //       ...headers,
  //     };
  //   }
  //
  //   let axiosResponse;
  //   switch (method) {
  //     case "put":
  //     case "post":
  //     case "patch":
  //       axiosResponse = await httpClient[method](url, payload);
  //       break;
  //     case "delete":
  //       axiosResponse = await httpClient.delete(url);
  //       break;
  //     default:
  //       axiosResponse = await httpClient.get(requestUrl);
  //       break;
  //   }
  //
  //   const {data} = axiosResponse;
  //
  //   return Promise.resolve({data});
  // },
});

export default HydraProvider;

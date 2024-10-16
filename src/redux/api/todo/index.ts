import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<TODOTYPE.GetTodoResponse, TODOTYPE.GetTodoRequest>({
      query: () => ({
        url: ``,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
  }),
});

export const { useGetProductQuery } = api;

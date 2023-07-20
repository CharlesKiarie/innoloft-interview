import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Config = {
    id: number,
    logo: string,
    mainColor: string,
    hasUserSection: boolean
}

export const configAPI = createApi({
    reducerPath: 'configAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api-test.innoloft.com/" }),
    endpoints: builder => ({
        getConfig: builder.query<Config, number>({
            query: (id: number) => ({ url: `configuration/${id}/`, method: 'get' }),
        }),
    }),
});

export const { useGetConfigQuery } = configAPI;

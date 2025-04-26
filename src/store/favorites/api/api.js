import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const API_URL = 'http://localhost:5050/recipes'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,

    }),
    endpoints: builder=>({})
})

export const { useLazyQuery } = api;
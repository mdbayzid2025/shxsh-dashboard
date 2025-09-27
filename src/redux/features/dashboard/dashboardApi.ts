import { baseApi } from "../../base/baseAPI";

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getGeneralStats:  builder.query({
            query: ()=>`/dashboard/general-stats`,
            transformResponse: (res: {data: any})=> res?.data,
        }),
        getOverView: builder.query({
            query: ()=>`/analytics/overview`,
            transformResponse: (res: {data: any})=> res?.data
        }),
        getRevenueGrowth: builder.query({
            query: ()=>`/analytics/revenue-growth`,
            transformResponse: (res: {data: any})=> res?.data
        })
    })
})

export const {
    useGetGeneralStatsQuery,
    useGetOverViewQuery,
    useGetRevenueGrowthQuery
} = dashboardApi;
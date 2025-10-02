import { baseApi } from "../../base/baseAPI";

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getGeneralStats:  builder.query({
            query: ()=>`/dashboard/general-stats`,
            transformResponse: (res: {data: any})=> res?.data,
        }),
        getMonthlyStats: builder.query({
            query: ()=>`/dashboard/monthly-stats/2025`,
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
    useGetMonthlyStatsQuery,
    useGetRevenueGrowthQuery
} = dashboardApi;
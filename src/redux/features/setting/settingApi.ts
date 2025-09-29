import { baseApi } from "../../base/baseAPI";

const settingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFAQ: builder.query({
      query: () => "/public/faq/all",
      transformResponse: (res: { data: any }) => res?.data,
    }),
    addFAQ: builder.mutation({
      query: (data) => ({
        url: "/public/faq",
        method: "POST",
        body: data,
      }),
    }),
    updateFAQ: builder.mutation({
      query: ({ id, data }) => ({
        url: `/public/faq/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteFAQ: builder.mutation({
      query: (id)=> {
        return {
          url: `/public/faq/${id}`,
          method: "DELETE",          
        }
      }
    }),

    getTermsCondition: builder.query({
      query: () => "/public/terms-and-condition",
      transformResponse: (res: { data: any }) => res?.data,
    }),

    getAbout: builder.query({
      query: () => "/public/about",
      transformResponse: (res: { data: any }) => res?.data,
    }),
    getPrivacyPolicy: builder.query({
      query: () => "/public/privacy-policy",
      transformResponse: (res: { data: any }) => res?.data,
    }),
    addDisclaimer: builder.mutation({
      query: (data) => {
        return {
          url: "/public",
          method: "POST",
          body: data,
        };
      },
    }),

    addSupport: builder.mutation({
      query: (data) => {
        return {
          url: "/contact-info",
          method: "POST",
          body: data,
        };
      },
    }),
    getSupport: builder.query({
      query: () => "/contact-info",
      transformResponse: (res: { data: any }) => res?.data,
    }),

    getNotification: builder.query({
      query: () => "/reports",
      transformResponse: (res: { data: any }) => res?.data,
    }),
  }),
});

export const {
  useGetFAQQuery,
  useGetAboutQuery,
  useGetPrivacyPolicyQuery,

  useGetSupportQuery,
  useAddSupportMutation,

  useAddFAQMutation,
  useUpdateFAQMutation,
  useDeleteFAQMutation,

  useGetTermsConditionQuery,
  useAddDisclaimerMutation,
} = settingApi;

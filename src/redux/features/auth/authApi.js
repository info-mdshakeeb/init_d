import { api } from "../../api/apiSlice"
import { userLogin } from "./authSlice"


export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/admin/login',
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          // set data in localStorage
          localStorage.setItem('adminAuth', JSON.stringify({ accessToken: result.data.token }))
          localStorage.removeItem('recoverToken')
          // set data in redux store
          dispatch(userLogin({ accessToken: result.data.token }))
        } catch (error) { console.log("error from authApi ", error); }
      }
    }),
    recoverAccount: builder.mutation({
      query: (data) => ({
        url: '/admin/check-admin',
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled
          localStorage.removeItem('adminAuth')
          localStorage.setItem('recoverToken', JSON.stringify({ recoverToken: result.data.token }))
        } catch (error) { console.log("error from authApi ", error) }
      }
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: '/admin/verify-otp',
        method: "POST",
        body: data
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: '/admin/change-password',
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled
          localStorage.removeItem('recoverToken')
          localStorage.removeItem('adminAuth')
        } catch (error) { console.log("error from authApi ", error) }
      }
    }),
  })
})
export const {
  useLoginMutation,
  useResetPasswordMutation
} = authApi
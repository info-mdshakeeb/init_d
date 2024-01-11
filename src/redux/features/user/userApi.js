import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/user/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: builder.query({
      query: (query) => `/user/list?${query || ""}`,
      providesTags: ["user"]
    }),
    getSingleUser: builder.query({
      query: (user_no) => `/user/details?user_no=${user_no}`,
      providesTags: ["user"]
    }),
    deleteUser: builder.mutation({
      query: (data, authToken) => ({
        url: "/user/delete",
        method: "DELETE",
        body: data,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }),
      invalidatesTags: ["user"]
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "/user/update",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"]
    })
  }),
});

export const {
  useCreateUserMutation, useGetUserQuery, useDeleteUserMutation, useGetSingleUserQuery, useUpdateUserMutation } = userApi;

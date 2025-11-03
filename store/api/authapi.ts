import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authapi = createApi({
    reducerPath: "authapi",
    baseQuery: fetchBaseQuery ({
        baseUrl : process.env.NEXT_PUBLIC_API_BASE_URL + '/api',
        prepareHeaders: (headers, { getState }) => {
          const apiKey = process.env.NEXT_PUBLIC_API_KEY;
          if (apiKey) {
            headers.set('x-api-key', apiKey);
          }
          return headers;
        },
    }),
        
    endpoints : builder =>({
        userlogin: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body:{
                    email : data.email,
                    password : data.password,
                }
            })
        })
    })
})
export const { useUserloginMutation } = authapi

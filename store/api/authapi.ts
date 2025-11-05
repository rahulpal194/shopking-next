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
        }),
        userregister : builder.mutation({
            query:(data)=>({
                url: "/auth/signup/register-validation",
                method: "POST",
                body:{
                    name : data.name,
                    email : data.email,
                    password : data.password,
                }
            })
        }),
        verifyemail : builder.mutation({
            query:(data)=>({
                url: "/auth/signup/email-validation",
                method: "POST",
                body:{
                    name : data.name,
                    email : data.email,
                    password : data.password,
                }
            })
        }),
        getslider : builder.query<any, void>({
            query:()=>({
                url:"/frontend/slider"
            })
        }),
        getcategory : builder.query<any, void>({
            query:()=>({
                url:"/frontend/product-category"
            })
        }),
        getpromotion : builder.query<any, void>({
            query:()=>({
                url:"/frontend/promotion?paginate=0&order_column=id&order_type=asc&type=5&status=5"
            })
        }),
    })
})
export const { useUserloginMutation , useUserregisterMutation , useGetsliderQuery , useGetcategoryQuery, useGetpromotionQuery } = authapi

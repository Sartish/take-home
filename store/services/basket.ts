// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types";

export const basketApi = createApi({
	// Base query with base URL
	reducerPath: "basketApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
	tagTypes: ["Basket"],
	// Creating endpoint builders, fetching product in basket
	// comes from types Product interface
	//query specifies the enpoint in this case basket
	// becomes a hook useGetBasketQuery
	endpoints: (builder) => ({
		getBasket: builder.query<Product[], void>({
			query: () => `basket`,
			providesTags: ["Basket"],
		}),
		postBasket: builder.mutation<Product[], Product[]>({
			query: (data) => ({
				url: "basket",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Basket"],
		}),
		addToBasket: builder.mutation<Product[], Product>({
			query: null, // Implement me

		}),
		removeFromBasket: builder.mutation<Product[], Product["productId"]>({
			query: null, // Implement me

		}),
	}),
});

export const { usePostBasketMutation, useGetBasketQuery } = basketApi;

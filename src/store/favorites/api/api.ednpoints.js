import { api } from "./api";

export const recipesApi = api.injectEndpoints({
    endpoints: builder=>({
        getRecipes: builder.query({
            query:()=>'/',
            providesTags: ['Recipe']
        }),
        createRecipe: builder.mutation({
            query: (recipe)=>({
                body: recipe,
                url: '/',
                method: 'POST'
            })
        }),
        invalidatesTags: ['Recipe'],
    }),
    overrideExisting: false
})

export const {useGetRecipesQuery, useCreateRecipeMutation} = recipesApi
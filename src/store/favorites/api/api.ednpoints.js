import { api } from "./api";

export const recipesApi = api.injectEndpoints({
    endpoints: builder=>({
        getRecipes: builder.query({
            query:()=>'/',
            providesTags: ()=>[{type:'Recipe'}]
        }),
        createRecipe: builder.mutation({
            query: (recipe)=>({
                body: recipe,
                url: '/',
                method: 'POST'
            }),
            invalidatesTags: ()=>[{type:'Recipe'}],
        }),
        removeRecipe: builder.mutation({
            query: (id)=>({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ()=>[{type:'Recipe'}],
        })
        
    }),
    overrideExisting: false
})

export const {useGetRecipesQuery, useCreateRecipeMutation, useRemoveRecipeMutation} = recipesApi
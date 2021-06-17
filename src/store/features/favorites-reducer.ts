import { IImage } from "../../types/image";
import { createAction, createReducer } from '@reduxjs/toolkit'

export const addItemToFavorite = createAction<IImage>('@@FAVORITES/add')
export const deleteItemFromFavorite = createAction<number>('@@FAVORITES/delete')

const favoritesReducer = createReducer([] as IImage[], (builder) => {
  builder
    .addCase(addItemToFavorite, (state, action) => {
      const item = action.payload
      return [...state, item]
    })
    .addCase(deleteItemFromFavorite, (state, action) => {
      return state.filter(item => item.id !== action.payload)
    })
})

export default favoritesReducer
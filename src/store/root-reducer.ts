import { combineReducers } from '@reduxjs/toolkit'
import imagesSlice from './features/images-slice'
import favoritesReducer from './features/favorites-reducer'

const rootReducer = combineReducers({
    imagesSlice,
    favoritesReducer
})


export default rootReducer
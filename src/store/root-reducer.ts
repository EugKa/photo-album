import { combineReducers } from '@reduxjs/toolkit'
import imagesSlice from './features/images-slice'

const rootReducer = combineReducers({
    imagesSlice
})


export default rootReducer
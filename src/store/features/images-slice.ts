import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchImagesData } from "../../api";
import { IImage } from "../../types/image";
  
interface AppState {
  data: IImage[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  favorites: [];
}

const initialState = {
  data: [],
  status: 'idle',
  favorites: []
} as AppState

export const fetchData = createAsyncThunk(
    "@@DATA/fetchDataList",
    async (params: any) => {
      const {searchParam, page} = params;
      console.log(`THUNK`, params)
      const data = await fetchImagesData(searchParam, page);
      return data;
      
    }
)

const imagesSlice = createSlice({
  name: '@@DATA',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
        state.status = 'pending';
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
    })
    builder.addCase(fetchData.rejected, 
        (state) => {
        state.status = 'failed';
    });
  },
})

export default imagesSlice.reducer;
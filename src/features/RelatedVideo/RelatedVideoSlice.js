import { getRelatedVideos } from "./RelatedVideoApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    relatedVideo: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedVideo = createAsyncThunk("relatedVideo/fetchRelatedVideo", async({id, tags}) =>{
    const relatedVideo = await getRelatedVideos({id, tags});
    return relatedVideo
    
})

const RelatedVideoSlice = createSlice({
    name: "relatedVideo",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchRelatedVideo.pending, (state) =>{
            state.isError = false;
            state.isLoading = true; 
        })
        .addCase(fetchRelatedVideo.fulfilled, (state,action) =>{
            state.isLoading = false; 
            state.relatedVideo = action.payload;
        })
        .addCase(fetchRelatedVideo.rejected, (state,action) =>{
            state.isLoading = false; 
            state.relatedVideo = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default RelatedVideoSlice.reducer;
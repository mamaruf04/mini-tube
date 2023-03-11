import { getTags } from "./TagApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchTags = createAsyncThunk("tags/fetchTags", async() =>{
    const tags = await getTags();
    return tags
})


const tagSlice = createSlice({
    name: "tag",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchTags.pending, (state) =>{
            state.isError = false;
            state.isLoading = true; 
        })
        .addCase(fetchTags.fulfilled, (state,action) =>{
            state.isLoading = false; 
            state.videos = action.payload;
        })
        .addCase(fetchTags.rejected, (state,action) =>{
            state.isLoading = false; 
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default tagSlice.reducer;
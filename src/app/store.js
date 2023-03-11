import { configureStore } from '@reduxjs/toolkit';
import filterReducer from "../features/filter/filterSlice";
import relatedVideoReducer from "../features/RelatedVideo/RelatedVideoSlice";
import TagReducer from "../features/Tags/TagSlice";
import videoReducer from "../features/Video/VideoSlice";
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: TagReducer,
    video : videoReducer,
    relatedVideo : relatedVideoReducer,
    filter: filterReducer
  },
});

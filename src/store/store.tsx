
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from  "../slices/newsSlice.js";
import loadingReducer from '../slices/loadingSlice.tsx';

const store = configureStore({
    reducer:  {
        newsPopular: newsReducer,
        loadingSlice: loadingReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
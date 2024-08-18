import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: "newsPopular",
    initialState: {
        newsPopularList: [],
        newSelected: {},
    },
    reducers: {
        setInitialState: (state, action)  => {
            state.newsPopularList = action.payload;
        },
        setNewSelected: (state, action)  => {
            state.newSelected = action.payload;
        }

    },
});

export const {  setInitialState, setNewSelected } = newsSlice.actions;
export default newsSlice.reducer;
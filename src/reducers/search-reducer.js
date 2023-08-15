import { createSlice } from "@reduxjs/toolkit";
import {findThunk} from "../services/search-thunk";
const initialState = {
    tuits: [],
    loading: false
}

const searchSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = [] },
        [findThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload },
        [findThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

    },
});


export default searchSlice.reducer;
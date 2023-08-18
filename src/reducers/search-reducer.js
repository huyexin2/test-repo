import { createSlice } from "@reduxjs/toolkit";
import {createThunk, findDetailThunk, findThunk} from "../services/search-thunk";
const initialState = {
    places: [],
    loading: false
}

const searchSlice = createSlice({
    name: 'places',
    initialState,
    extraReducers: {
        [findThunk.pending]:
            (state) => {
                state.loading = true
                state.places = [] },
        [findThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.places = payload},
        [findThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.places = action.error
            },
        [createThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                // state.places.push(payload)
            },
        [findDetailThunk.pending]:
            (state) => {
                state.loading = true
                state.places = [] },
        [findDetailThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.places = payload},
        [findDetailThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.places = action.error
            },

    },
});


export default searchSlice.reducer;
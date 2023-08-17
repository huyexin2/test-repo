import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./search-service";



export const findThunk = createAsyncThunk(
    "park/findParks",
    async (searchContent) =>
        await service.findPark(searchContent)
);

export const findDetailThunk = createAsyncThunk(
    "park/findParkDetails",
    async (place_id) =>
        await service.findParkDetails(place_id)
);

export const createThunk = createAsyncThunk(
    'park/createParks',
    async (park) => {
        const newPark = await service.createPark(park)
        return newPark
    })

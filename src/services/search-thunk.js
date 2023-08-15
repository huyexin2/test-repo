import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./search-service";



export const findThunk = createAsyncThunk(
    "park/findParks",
    async (searchContent) =>
        await service.findPark(searchContent)
);
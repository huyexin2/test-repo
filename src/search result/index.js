import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { findThunk } from "../services/search-thunk";
import SearchItem from "./searchItem";


function SearchResult() {
    const [searchContent, setSearchContent] = useState("");
    const { tuits, loading } = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findThunk())
    }, [])
    const dta = tuits.candidates


    const handleSearch = async () => {

        try {
            await dispatch(findThunk( {searchContent} ));
        } catch (e) {
            alert(e);
        }
        setSearchContent("");
    };



    const viewDetailSearch = async () => {

        try {
            await dispatch(findThunk( {searchContent} ));
        } catch (e) {
            alert(e);
        }
        setSearchContent("");
    };



    return (
        <>
        <div className="row">
            <div className="col-8">
                <div className="row">
                    <div className="col-9">
                        <input placeholder="Search "
                               className="form-control rounded-pill pl-5" value={searchContent}
                               onChange={(event) => setSearchContent(event.target.value)}/>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary mt-2"
                                onClick={handleSearch}> Search</button>
                    </div>

                </div>


                <div className="list-group">

                    {dta?.[0].name}

                    {dta?.[0].formatted_address}
                    <button className="btn btn-primary mt-2"> View Details</button>
                </div>

            </div>
        </div>
        </>
    );
}

export default SearchResult
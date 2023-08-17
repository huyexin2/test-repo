import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createThunk, findThunk} from "../services/search-thunk";
import { Link } from "react-router-dom";


function SearchResult() {
    const [searchContent, setSearchContent] = useState("");
    const { places, loading } = useSelector(state => state.places)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findThunk())
    }, [])
    const dta = places.candidates




    const handleSearch = async () => {
        try {
            await dispatch(findThunk({searchContent}));
        } catch (e) {
            alert(e);
        }
        setSearchContent("");
    };



    const handleDetail = async () => {

        try {
            console.log(dta)
            await  dispatch(createThunk(places));
        } catch (e) {
            alert(e);
        }
        setSearchContent("");
       // await dispatch(createThunk(findThunk( {searchContent})))
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
                    {loading &&
                        <li className="list-group-item">
                            Loading...
                        </li>
                    }
                    {
                        places.candidates?.map(tuit =>
                            <>
                            <div>{tuit.name}</div>
                            <div>{tuit.formatted_address}</div>
                                <div><Link to={"/details"}><button className="btn btn-primary mt-2"
                                             onClick={handleDetail}> Details</button></Link></div>
                            </>)
                    }



                </div>

            </div>
        </div>
        </>
    );
}

export default SearchResult
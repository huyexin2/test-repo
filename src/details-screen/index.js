import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findDetailThunk} from "../services/search-thunk";
import {Link} from "react-router-dom";
import axios from "axios";


function Details() {
    const { places, loading } = useSelector(state => state.places)
    const { placeDetails } = useSelector(state => state.placeDetails)

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(findDetailThunk())
    // }, [])
    console.log(places.candidates?.[0])
    //console.log(placeDetails)

 // async function getData() {
 //        const url = 'http://localhost:4000/api/details';
 //        // const response = axios.get(url);
 //        // console.log(response.data)
 //        // return response.data;
 //        const response = await fetch(url);
 //        const jsonResponse = await response.json();
 //        console.log(jsonResponse);
 //        return jsonResponse
 //    }
 //    const u = getData()
 //    console.log(u)


    // const address = fetch('http://localhost:4000/api/details')
    //     .then((response) => response.json())
    //     .then((user) => {
    //         return user;
    //     });
    //
    // const printAddress = async () => {
    //     const a = await address;
    //     console.log(a?.[0].address);
    //     return a
    // };
    //
    // const details = printAddress()

    const [data, setData] = useState({});
    const url = 'http://localhost:4000/api/details';

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((r) => {
                // save data from fetch request to state
                setData(r);
                console.log(data)
            });
    }, [url]);

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h2>Details</h2>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-2">
                            <div>
                                {<Link className="list-group" to="/search">Back to search</Link>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                {
                                    places.candidates?.map(tuit =>
                                        <>
                                            <div>Name: {tuit.name}<br/></div>
                                            <div>Address: {tuit.formatted_address}<br/></div>
                                            <div>Rating: {tuit.rating}<br/></div>
                                        </>
                                        )
                                }
                            </div>
                            <div className="col-6">
                                <div className="list-group" >
                                    <br/>
                                    <div className="list-group-item">
                                        {data?.[0].address}
                                        {data?.[0].name}
                                        {data?.[0].place_id}
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details
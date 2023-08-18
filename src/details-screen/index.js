import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findDetailThunk} from "../services/search-thunk";
import {Link} from "react-router-dom";



function Details() {
    const { places, loading } = useSelector(state => state.places)
    const { placesDetails} = useSelector(state => state.placesDetails)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDetailThunk())
    }, [])

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
                            <div className="col-6">
                                {
                                    places.candidates?.map(tuit =>
                                        <>
                                            <div><h2>From Google API</h2></div>
                                            <div>Name: {tuit.name}<br/></div>
                                            <div>Address: {tuit.formatted_address}<br/></div>
                                            <div>Rating: {tuit.rating}<br/></div>
                                            <div>PlaceID: {tuit.place_id}<br/></div>
                                        </>
                                    )
                                }
                            </div>
                            <div className="col-6">
                                {
                                    placesDetails?.map(tuit =>
                                        <>
                                            <div><h2>From Mongodb</h2></div>
                                            <div>Name: {tuit.name}<br/></div>
                                            <div>Address: {tuit.address}<br/></div>
                                            <div>mongoID:{tuit._id}<br/></div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details
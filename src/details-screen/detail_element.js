import { Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findDetailThunk} from "../services/search-thunk";

function DetailContent(){
    // const [parkDetails, setParkDetails] = useState(state => state.places);
    const { places } = useSelector(state => state.places)
    console.log(places.candidates?.[0].formatted_address)
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
                            <img className="rounded-pill" height="200px" width = "300px" src="https://hips.hearstapps.com/hmg-prod/images/small-dogs-toy-poodle-1563780396.jpg?crop=1xw:0.8491394606103619xh;center,top&resize=1200:*"/>
                            </div>
                            <div>
                                <br/>
                                {<Link className="list-group" to="/search">Back to search</Link>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="list-group" >
                                    <br/>
                                    <div className="list-group-item">
                                        <div>Name: {places.candidates?.[0].name}<br/></div>
                                        <div>Address: {places.candidates?.[0].formatted_address}<br/></div>
                                            <div>Rating: {places.candidates?.[0].rating}<br/></div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="list-group" >
                                    <br/>
                                    <div className="list-group-item">
                                        MongoDB Rendering

                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/*<div className="col-9">*/}
                        {/*    <h2>UserName/Detail</h2>*/}
                        {/*    <ul className="nav nav-pills mb-2 mt-2">*/}
                        {/*        <li className="nav-item">*/}
                        {/*            <a className="nav-link">Followers</a>*/}
                        {/*        </li>*/}
                        {/*        <li className="nav-item"> */}
                        {/*            <a className="nav-link">Following</a>*/}
                        {/*        </li>*/}
                        {/*        <li className="nav-item">*/}
                        {/*            <a className="nav-link">Edit Profile</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*    <ul className="list-group">*/}

                        {/*        <li>Content</li>*/}
                        {/*        <li>Content</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </div>

        </>
    );
}
export default DetailContent
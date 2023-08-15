import React from "react";
import {useDispatch} from "react-redux";

const SearchItem = ({search}) => {
    console.log(search)

    const dispatch = useDispatch();

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    {search.name}
                </li>
                <li className="list-group-item">
                    {search.formatted_address}
                </li>
                <button className="btn btn-primary mt-2"
                        > View Details</button>
            </ul>
        </>
    );
}
export default SearchItem
import axios from 'axios';
//const API_BASE = process.env.REACT_APP_SERVER_API_URL
const TUITS_API = `http://localhost:4000/api/places`;

export const findPark = async ({searchContent}) => {
    const response = await axios.get(`/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry%2Cplace_id&input=${searchContent}&inputtype=textquery&locationbias=circle%3A2000%4043.774995180717443%2C-79.3456900605342&key=AIzaSyAdq_1MT2PfwTJ3sXELKfEX0Pt2_W0AFpk`);
    const tuits = response.data;

    console.log(tuits)
    return tuits;
}

export const createPark = async (park) => {
    const response = await axios.post(TUITS_API, park)
    return response.data;
}

export const findParkDetails = async ({place_id}) => {
    const response = await axios.get(`/place/details/json?fields=name%2Crating%2Cformatted_phone_number&place_id=${place_id}&key=AIzaSyAdq_1MT2PfwTJ3sXELKfEX0Pt2_W0AFpk`);
    const tuits = response.data;

    console.log(tuits)
    return tuits;
}
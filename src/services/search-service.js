import axios from 'axios';

export const findPark = async ({searchContent}) => {
    const response = await axios.get(`/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry%2Cplace_id&input=${searchContent}&inputtype=textquery&locationbias=circle%3A2000%4043.774995180717443%2C-79.3456900605342&key=AIzaSyAdq_1MT2PfwTJ3sXELKfEX0Pt2_W0AFpk`);
    const tuits = response.data;
    console.log(tuits)
    return tuits;
}
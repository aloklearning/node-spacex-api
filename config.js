// It is a reusable file for making a call to the API and get the results from SpaceX API
// Not a good idea to call the axio releated method every where, so made this one
const axios = require('axios');
const baseURL = 'https://api.spacexdata.com/v3';

module.exports = async (url) => {
    try {
        let result = await axios.get(`${baseURL}${url}`);
        return result;
    } catch (error) {
        return error.message;
    }
}
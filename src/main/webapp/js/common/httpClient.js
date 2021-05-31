import axios from 'axios';
import { API_URL } from './config';
import { HEADER_CONTENT_TYPE, MEDIA_TYPE_JSON } from './constants';

const get = async (path, config) => {
    try {
        return await axios.get(`${API_URL}${path}`, config);
    } catch (error) {
        console.log('Get request error: ', error);
    }
    return false;
};

export default { get };
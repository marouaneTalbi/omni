import axios from 'axios';

const sendRequest = async (method, url, data = null, params = null) => {
    try {
      const response = await axios({
        method,
        url,
        data,
        params,
      });
  
      return response.data;
    } catch (error) {
      // Gérez les erreurs ici
      throw new Error(error.message);
    }
  };

  export const get = async (url, params = null) => {
    return sendRequest('GET', url, null, params);
  };
  
  export const post = async (url, data) => {
    return sendRequest('POST', url, data);
  };
  
  export const update = async (url, data) => {
    return sendRequest('PUT', url, data);
  };
  
  export const remove = async (url) => {
    return sendRequest('DELETE', url);
  };
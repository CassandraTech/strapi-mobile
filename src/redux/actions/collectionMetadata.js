import axios from 'axios';

export const collectionMetadata_get = () => {
  return async dispatch => {
    const BASE_URL = 'https://ietnitk-cms.herokuapp.com';
    const res = await axios.get(`${BASE_URL}/mobile/metadata`);
    if (res.data) {
      dispatch({
        type: 'COLMET',
        payload: res.data.message,
      });
    } else {
      console.log('Unable to fetch');
    }
  };
};

import axios from 'axios';

export const collection_get = endpoint => {
  return async dispatch => {
    const BASE_URL = 'https://ietnitk-cms.herokuapp.com';
    console.log(`${BASE_URL}/${endpoint}`)
    axios.get(`${BASE_URL}/${endpoint}`).then(res=>{
      dispatch({
        type: 'COLDATA',
        payload: res.data,
      });
    }).catch(err=>console.error("E",err,typeof(err)));
  };
};

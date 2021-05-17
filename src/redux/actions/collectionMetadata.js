import axios from "axios";

export const collectionMetadata_get = () => {
  try {
    return async dispatch => {
    const BASE_URL="https://ietnitk-cms.herokuapp.com"
      const res = await axios.get(`${BASE_URL}/mobile/metadata`);
      if (res.data) {
        dispatch({
          type: "COLMET",
          payload: res.data.message
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

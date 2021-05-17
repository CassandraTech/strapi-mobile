const initState = {
  payload: null,
  error: '',
};

const collectionsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'COLMET':
      return {...action.payload}
    default:
      return state;
  }
};
export default collectionsReducer;

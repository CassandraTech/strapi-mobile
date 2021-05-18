const initState = {
  error: '',
};

const collectionsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'COLMET':
      return {...state, metadata: action.payload};
    case 'COLDATA':
      return {...state, data: action.payload};
    default:
      return state;
  }
};
export default collectionsReducer;

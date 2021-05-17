import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import collectionsReducer from "./reducers/collectionsReducer"
const rootReducer = combineReducers({
  collectionMetadata: collectionsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
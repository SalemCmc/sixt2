import { combineReducers } from 'redux';
import offersReducer from './offersReducer';
import searchReducer from './searchReducer';
import uiContextReducer from './uiContextReducer';

export default combineReducers({
  offers: offersReducer,
  searchOffers:searchReducer,
  uiContext:uiContextReducer
});
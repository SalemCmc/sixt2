import { createStore, applyMiddleware, compose } from 'redux';
//import {  composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//import rootReducer from './redux/reducers';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  //compose( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  ) suport for redux dev tools
  compose(applyMiddleware(...middleware))

  );

export default store;
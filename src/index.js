import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './searchFeature/searchReducer'; //reducer
// import composeWithDevTools from 'redux-devtools-extension';
import {getApiData} from './searchFeature/searchMiddleware';

const rootReducer = combineReducers({
  searchReducer, //both key and value

});

// const composedEnhancer = composeWithDevTools(
// applyMiddleware(
//   thunk
// )
// );
// const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;


const myStore = createStore(
  rootReducer,
  //should I have an initial state here? I passed them in with the reducers instead
  compose(  // compose allows the use of "enhancers" such as middleware and devtools
  applyMiddleware(thunk, getApiData), //middleware - allegedly needed for thunks and async work
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //devtools; comment out if testign not on chrome
  // if devtools are first, apparently all actions are wrapped in another action
    //apply middleware is breaking edge browser
    //... will attempt to fix after I get chrome to work - ask in discord
  )


);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

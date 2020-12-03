import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios'; //this doesnt go here...


//ACTIONS
//change these
export const saveResults = (result) => {  //gets data from api and loads into state

  return {
    type: 'SAVE_RESULTS',
            payload: result
  }
}
export const setQuery = (myQuery) => {
  return {
          type: 'SET_QUERY',
          payload: myQuery
        };
}

export const apiError = (res) => {
  return {
          type: 'API_ERROR',
          payload: res
        };
}
export const getData = (res) => {
  return {
          type: 'GET_DATA',
          payload: res
        };
}

//...may be able to use a method in one of these packages to do this... or
//  export  const save = () => {
//     return {
//       type: 'DECREMENT'
//     };
//   }
//   export const setTo = (num = 1) => {
//     return {
//       type: 'SET_TO',
//       payload: num
//     };
//   }


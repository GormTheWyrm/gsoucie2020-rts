import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

//ACTIONS
//change these
export const saveResults = () => {  //gets data from api and loads into state
  return function (dispatch) {
    return axios.get('https://hn.algolia.com/api/v1/search?query=foo,kevin&tags=story')
      .then(res => {
        dispatch({
          type: 'SAVE_RESULTS',
          payload: res
          //middleware to catch errors?
        })
      })

  };
}
export const setQuery = (myQuery) => {
  return {
          type: 'SET_QUERY',
          payload: myQuery
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


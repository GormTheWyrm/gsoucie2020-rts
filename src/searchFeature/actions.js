//ACTIONS
//change these
export const increment = () => {
    return {
      type: 'INCREMENT'
    };
  }
 export  const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  }
  export const setTo = (num = 1) => {
    return {
      type: 'SET_TO',
      payload: num
    };
  }
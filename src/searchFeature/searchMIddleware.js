//middleware acts on actions before they hit the reducer. 
import axios from 'axios';
import { saveResults } from './actions';


//if no apiData this middleware should dispatch apiError...
export function getApiData({ dispatch }) { //probably need to import dispatch... 
  //this is broken in edge right now  //may be related to chrome devtools...
  return function (next) {
    return function (action) {
      // do your stuff
      console.log(action);
      if (action.type === 'SAVE_RESULTS') {
        console.log("MIDDLEWARE");
        console.log(action.payload);
        // action.action.payload.hits = [{title: 'middleware'}]; //worked!
        // console.log(action.payload);
        axios.get(action.payload.searchUrl)  //works if url generated
          .then(res => { //data.hits...

            //     //need to figure out what is returned upon error!
            //     // I got a {"message": "Unknown parameter: tas"} by mispelling "tags"
            console.log('AXIOS BABY!');
            // console.log(res);
            if (res.data) {
              console.log("DATA EXISTS, changing action");
              action.payload.hits = [...res.data.hits];
              console.log(action);
              console.log('did action change to include results?'); //yes, it did!
              //what needs to be returned to saveResults?     //hit[{}], query-(redundnt), searchTerms, isError
              // let newPayload = action.payload;


              // dispatch(saveResults(newPayload)); //should now be the current payload and send the api results to the reducer!
              //dispatch not being sent...
              console.log("dispatch not sent?");

              //dispatch saveResults
            }
            else {
              //dispatch error
              console.log('ERROR: API DATA NOT RECEIVED');
            }
            return next(action);  //should continue dispatching the saveResults action
            //needs to be in the promise!

            //       console.log("DATA EXIST!!");
            //       action.payload.hits = [...res.data.hits]; //test this!
            //       //put the new data into an action and dispatch it
            //       //saveResults reqires an 'action.payload.hits'
            //       console.log(action);
            //       dispatch(saveResults());

            //       // action.action.payload.query
            //       //all this should dod is return results to state so they can be mapped!
            //       // console.log(action);
            //       // console.log(action.action.payload.hits);
            //     }
            //     else {
            //       //dispatch error // need to make this do something- both dispatch and show an error somewhere...
            //       console.log("ERROR RETURN ERROR DISPATCH!")
            // }

          });
        //     if (res.hits === undefined) {
        //       action.hits = [{}]
        //       //dispatch error
        //       dispatch({
        //         type: 'API_ERROR',
        //         payload: action.searchTerms
        //         //middleware to catch errors?
        //       })
        //     }

        // })
        //need to determine whether this is sufficient error handling. 
        //and whether to send some sort of error message...
        // return next(action);  //should continue dispatching the saveResults action
      }
    }
  }
}


import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchFeature.css';
import axios from 'axios';

//when user submits query it should save query into state
//...actual axios call made on main page so that the results can be mapped there
//.....no, made here, and main page will use the results from state...
//this function should also add filters and other info to state...
//but those must be displayed here

//sort by relevance, points then number of comments
//...
//sort by date, most recent first
//...
// can filter on tags: story, comment, poll, pollop, show_hn, ask_hn, front_page, author_:USERNAME, story_:ID
//numeric filters: numericFilters=  created_at_i, points, num_comments
//...< , <= , = , >, <, >=
//page=pagenumber




// export default {
//   search: function(query, parameters) {
//     return axios.get(baseURL + query + parameters);
//   }
// };
//return axios.get(finalURL);


// Axios.get('http://hn.algolia.com/api/v1/search?query=test')

function SearchBar() {
    const baseURL = 'https://hn.algolia.com/api/v1/search?query=';
    let query = ''; //use hook 
    //may need to deal with white space, seems like API is handling ok... at least in query
    //write function to call ajax...
    //and figure out how to get promise into state
    
    return(
        <form className="searchForm">
            <label>
          Search for:
       <input type="text" name="searchbar" className='Searchbar' />
        </label>
        <input type="submit" value="Search" />
        </form>
    )
}
export default SearchBar
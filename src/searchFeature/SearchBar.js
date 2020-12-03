import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveResults, setQuery, getData } from './actions';
import './SearchFeature.css';


//new simple goal: set state.query upn submit


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





// Axios.get('http://hn.algolia.com/api/v1/search?query=test')

function SearchBar() {
    const dispatch = useDispatch();
    const baseUrl = 'https://hn.algolia.com/api/v1/search?query=';
    let query = ''; 
    //may need to deal with white space, seems like API is handling ok... at least in query
//set up tags and other parameters
    let searchUrl = baseUrl + query; //add in other parameters...
    //api data: {data}
    let results = {hits: [{}], searchTerms: query, searchUrl: searchUrl };
    let testData = {hits: [{title: 'test button'}], searchTerms: 'query', searchUrl: 'https://hn.algolia.com/api/v1/search?query=mine' }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit click');
        dispatch(saveResults(results)); //update to include custom query

    }
    const handleClick = (event) => {
        event.preventDefault();
        console.log("test click")
        dispatch(saveResults(testData));

    }
    return ( 
        <form className="searchForm" onSubmit={handleSubmit}>
            <label>
                Search for:
       <input type="text" name="searchbar" className='Searchbar' />
            </label>
            <input type="submit" value="Search" />
            <button onClick={handleClick}>test on click</button>
        </form>
    )
}
export default SearchBar
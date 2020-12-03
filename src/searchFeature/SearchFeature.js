import React, { useState } from 'react';
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';

import { useSelector, useDispatch } from 'react-redux';
function SearchFeature() {
    
//results will be results from API
const results = useSelector(state => state.searchReducer.hits);
// need to get results from state... after putting them in there
console.log(results);
// something is sending 3 actions to my reducerfunction without recognizable action names...
//this appears to be part of the combine reducer functionality and not out of the ordinary
    return (
        <>
            <h3> Search The Hacker News Algolia API</h3>
            <SearchBar />
            <ul>
                 {results.map((result, index) => (
                    <SearchResult key={index} title={result.title} author={result.author} url={result.url} comments={result.comments} />
                ))} 
            </ul>
        </>
    )
}
export default SearchFeature;


/*
notes
there should be 2 components; a form and a result that can be mapped to the api data
form data should be saved to state when user submits/presses enter
middlware should call api
state should be updates with apidata - which should update visual components
//also need to sav eusers search terms within state

*/
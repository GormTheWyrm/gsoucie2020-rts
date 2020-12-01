import React, { useState } from 'react';
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';

import { useSelector, useDispatch } from 'react-redux';
function SearchFeature() {
    
//results will be results from API
const results = useSelector(state => state.searchReducer.hits);
// need to get results from state... after putting them in there

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
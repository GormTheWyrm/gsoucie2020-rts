import React, { useState } from 'react';
import SearchResult from './SearchResult';

import { useSelector, useDispatch } from 'react-redux';
function SearchFeature() {

//results will be results from API
let results = [{title: "test", author: "test"}];

    return (
        <>
            <h3> Search The Hacker News Algolia API</h3>
            {/* <Searchbar /> */}
            <ul>
                {results.map((result, index) => (
                    <SearchResult key={index} title={result.title} author={result.author} url={result.url} comments={result.comments} />
                ))}
            </ul>
        </>
    )
}
export default SearchFeature;
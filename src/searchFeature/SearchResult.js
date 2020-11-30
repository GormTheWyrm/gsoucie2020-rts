import React from 'react';
import './SearchFeature.css';


function SearchResult(props) {

  return (
    <div className="SearchResult">
      <h3>Title: {props.title}</h3>
      <p>Author: {props.author}</p>
      <p>URL: {props.url}</p>
      <p>Comments: {props.comments}</p>
      {/* <p>Date: {results.date}</p> */}
      {/* fix date- created at? */}
    </div>
  );
}
export default SearchResult;


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveResults, setQuery, getData } from './actions';
import './SearchFeature.css';

//https://dev.to/deboragaleano/how-to-add-a-search-bar-in-react-noc
//...searchbar



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


//NEXT STEP: GET FORM TO WORK
// 1. get sumbit to add query to url and save it, plus save search terms...
//2. checkboxes...


// Axios.get('http://hn.algolia.com/api/v1/search?query=test')

function SearchBar() {
    const [search, setSearch] = useState(''); //test



    const dispatch = useDispatch();

    //may need to deal with white space, seems like API is handling ok... at least in query
    //set up tags and other parameters

    let testData = { hits: [{ title: 'test button' }], searchTerms: 'query', searchUrl: 'https://hn.algolia.com/api/v1/search?query=mine' }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit click');
        // console.log(event.target.searchbar.value);  //!!! VALUE I NEED!
        let query = event.target.searchbar.value;
        const baseUrl = 'https://hn.algolia.com/api/v1/search?';
        // let workingUrl = baseUrl;
        let searchUrl = baseUrl + 'query=' + query; //query can be blank

        
        // console.log(event.target.comments.checked);

        let isTags = false;
        let myTags = '';
        //if any tags, turn isTags true 
        if ((event.target.story.checked === true) || (event.target.comments.checked === true) || (event.target.polls.checked === true)
            || (event.target.pollops.checked === true) || (event.target.showhn.checked === true) || (event.target.askhn.checked === true)
            || (event.target.frontpage.checked === true)) {
            myTags += `&tags=`;
            isTags = true;
        }
        //if logic for each checked value: add tag to myTags if checked
        if (event.target.comments.checked === true) {
            myTags += `comment,`;
            //returning just the author, not title... need to find something to return here to make it accessible...
        }
        if (event.target.polls.checked === true) {
            myTags += `poll,`;
            //retuned title, but no URL... maybe return the objectID?
            //maybe return points as well...
        }
        if (event.target.pollops.checked === true) {
            myTags += `pollopt,`;
            //only author showing up...
        }
        if (event.target.showhn.checked === true) {
            myTags += `show_hn,`;
            //no results
        }
        if (event.target.showhn.checked === true) {
            myTags += `ask_hn,`;
            //n results
        }
        if (event.target.showhn.checked === true) {
            myTags += `front_page,`;
        }
        //author: USERNAME
        //story: ID
        //will need to figure out whether this is going through as AND or OR and make the option available
        //replace query with ID and url if author or sotry id == true?... remov query and ...
        //...no, add a text form/box to read values from...

        //if isTags true, add tags to searchUrl
        if (isTags === true) {
            searchUrl += myTags;
            //set working URL t oinclude tags...
        }
        let results = { hits: [{}], searchTerms: query, searchUrl: searchUrl }; // create results to be sent through middleware
        // results.searchUrl = searchUrl;  //set searchUrl in results so it gets searched in API
        console.log('URL');
        console.log(results.searchUrl);
        console.log(isTags)

        
        dispatch(saveResults(results)); //update to include custom query
        //working, but only does basic search, no tags, etc
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
       <input type="text" placeholder='Search the API' name="searchbar" className='Searchbar' value={search} onChange={(e) => setSearch(e.target.value)} />
            </label>
            <input type="submit" value='Search' name='submitButton' />
            <button onClick={handleClick}>test on click</button>
            {/*  can filter on tags: story, comment, poll, pollop, show_hn, ask_hn, front_page, author_:USERNAME, story_:ID */}
            <br />
            {/* checkbox wrapped by label */}
            <input type="checkbox" name="story" />
            <label > Story</label><br />
            <input type="checkbox" name="comments" />
            <label > Comments</label><br />
            <input type="checkbox" name="polls" />
            <label > Polls</label><br />
            <input type="checkbox" name="pollops" />
            <label > PollOps</label> <br />
            <input type="checkbox" name="showhn" />
            <label > Show HN</label> <br />
            <input type="checkbox" name="askhn" />
            <label > Ask HN</label> <br />
            <input type="checkbox" name="frontpage" />
            <label > Front Page</label> <br />
        </form>

        // can filter on tags: story, comment, poll, pollop, show_hn, ask_hn, front_page, author_:USERNAME, story_:ID
    )
}
export default SearchBar
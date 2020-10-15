import React, { Component } from 'react'

class Search extends Component {
    state = {};

    render() {
        return (
            <div>
                <label>Search</label>
                <input type="text" className="form-control" />
                <button className='btn btn-danger mt-3'>Search</button>
            </div>
        )
    }
};

export default Search;
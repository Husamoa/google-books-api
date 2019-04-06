import React from 'react';

const SearchInput = (props) => {
  return (
    <form className="form-inline" onSubmit={props.searchBook}>
      <div className="form-group mb-2">
          <input type="text" className="form-control" placeholder="Title" onChange={props.handleSearch} />
      </div>
      <button type="submit" className="btn btn-secondary mb-2">Search</button>
    </form>
  )
}

export default SearchInput;

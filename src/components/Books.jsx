import React, { Component, Fragment } from 'react';
import SearchInput from './SearchInput';
import BookList from './BookList';

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      responseError: false
    }
  }

  searchBook = (e) => {
    e.preventDefault();

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          responseError: false,
          books: [...data.items]
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          responseError: true
        })
      })
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }


    render() {
      const renderBookList = this.state.responseError ? <div className="container"><div className="alert alert-warning col-12 text-center" role="alert">No results found</div></div> : <BookList books={this.state.books} />


        return (
            <Fragment>
              <div className="container">
              <div className="row d-flex justify-content-center mb-5">
              <SearchInput searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {renderBookList}
              </div>
            </div>
            </Fragment>
        );
    }
}

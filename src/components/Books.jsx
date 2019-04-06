import React, { Component, Fragment } from 'react';
import SearchInput from './SearchInput';
import BookList from './BookList';

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
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
        console.log(data.items)
        this.setState({
          books: [...data.items]
        })
      })
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }


    render() {
        return (
            <Fragment>
              <div className="container">
              <div className="row d-flex justify-content-center">
              <SearchInput searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <BookList books={this.state.books} />
              </div>
            </div>
            </Fragment>
        );
    }
}

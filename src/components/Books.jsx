import React, {Component, Fragment} from 'react';
import SearchInput from './SearchInput';
import BookList from './BookList';

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      responseError: false,
      maxResults: 12
    }
  }

  searchBook = (e) => {
    e.preventDefault();

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&maxResults=${this.state.maxResults}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json()).then(data => {
      this.setState({
        responseError: false,
        books: [...data.items]
      })
    }).catch(error => {
      console.log(error)
      this.setState({responseError: true})
    })
  }

  handleSearch = (e) => {
    this.setState({searchField: e.target.value, maxResults: 12})
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('bookList');
    if (this.isBottom(wrappedElement)) {
      this.setState({
        maxResults: this.state.maxResults + 12
      })
      if(this.state.maxResults <= 36) {
        this.searchBook(event);
      } else {
        this.setState({
          maxResults: 40
        })
        this.searchBook(event);
      }
    }
  };

  render() {
    const renderBookList = this.state.responseError
      ? <div className="container">
          <div className="alert alert-warning col-12 text-center" role="alert">No results found</div>
        </div>
      : <BookList books={this.state.books}/>

    return (<Fragment>
      <div className="container-fluid bg-light d-flex justify-content-center">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <SearchInput searchBook={this.searchBook} handleSearch={this.handleSearch}/>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div id={'bookList'} className="row">
          {renderBookList}
        </div>
      </div>
    </Fragment>);
  }
}

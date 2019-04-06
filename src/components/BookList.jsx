import React, {Fragment} from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
  return (
    <Fragment>
      {
        props.books.map((book, i) => {
          return ( <div className="col">
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            />
        </div>
        )
        })
      }
    </Fragment>
  )
}

export default BookList;

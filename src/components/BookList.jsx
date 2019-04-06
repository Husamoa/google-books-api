import React, {Fragment} from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
  const image = (volumeInfo) => {
    if (volumeInfo.hasOwnProperty('imageLinks')) {
      return volumeInfo.imageLinks.thumbnail;
    } else {
      return './images/noImage.png'
    }
  }

  const description = (volumeInfo) => {
    if (volumeInfo.hasOwnProperty('description')) {
      return `${volumeInfo.description.split(" ").splice(0, 20).join(" ")}...`;
    } else {
      return 'No description'
    }
  }

  return (
    <Fragment>
      {
        props.books.map((book, i) => {
          return ( <div className="col mb-5 d-flex justify-content-center" key={i}>
          <BookCard
            info={book.volumeInfo}
            image={image(book.volumeInfo)}
            title={book.volumeInfo.title}
            description={description(book.volumeInfo)}
            />
        </div>
        )
        })
      }
    </Fragment>
  )
}

export default BookList;

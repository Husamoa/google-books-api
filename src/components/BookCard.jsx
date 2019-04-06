import React from 'react';

const BookCard = (props) => {
  return (
    <div style={{width: '18rem'}}>
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>

  )
}

export default BookCard;

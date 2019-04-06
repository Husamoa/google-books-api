import React, { Component, Fragment } from 'react';

import Books from './Books';

export default class App extends Component {
  state={ search: ""}

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    })
  }


    render() {
      const { search } = this.state;
        return (
            <Books />
        );
    }
}

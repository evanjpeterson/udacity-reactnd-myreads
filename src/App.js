import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    storedBooks: [],
    bookshelves: [
      ["currentlyReading", "Currently Reading"],
      ["wantToRead", "Want to Read"],
      ["read", "Read"]
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(storedBooks => {
        this.setState({ storedBooks: storedBooks })
      })
  }

  render() {
    const { storedBooks, bookshelves } = this.state

    return (
      <div className="app">
        <Route exact path="/search" render={() =>
          <SearchBooks />
        }/>
        <Route exact path="/" render={() =>
          <ListBooks
            bookshelves={bookshelves}
            books={storedBooks}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp

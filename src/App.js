import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import * as Constants from './Constants'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    storedBooks: [],
    searchResults: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    return BooksAPI.getAll()
      .then(storedBooks => {
        this.setState({ storedBooks })
      })
  }

  utils = {
    searchBooks: (query) => {
      return query
        ? BooksAPI.search(query, Constants.MAX_SEARCH_RESULTS)
            .then(searchResults => {
              this.setState({ searchResults })
            })
        : Promise.resolve(this.setState( { searchResults: [] }))
    },
    updateShelf: (book, shelf) => {
      return BooksAPI.update(book, shelf)
        .then(() => {
          return this.getAllBooks()
        })
    }
  }

  render() {
    const { storedBooks, searchResults } = this.state

    return (
      <div className="app">
        <Route exact path="/search" render={() =>
          <SearchBooks
            results={searchResults}
            storedBooks={storedBooks}
            utils={this.utils}
          />
        }/>
        <Route exact path="/" render={() =>
          <ListBooks
            bookshelves={Constants.BOOKSHELVES}
            books={storedBooks}
            utils={this.utils}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp

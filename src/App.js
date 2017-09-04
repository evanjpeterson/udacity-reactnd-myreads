import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    storedBooks: [],
    searchResults: [],
    bookshelves: [
      ["currentlyReading", "Currently Reading"],
      ["wantToRead", "Want to Read"],
      ["read", "Read"]
    ],
  }

  utils = {
    getAllBooks: () => {
      BooksAPI.getAll()
        .then(storedBooks => {
          this.setState({ storedBooks })
        })
    },
    searchBooks: (query) => {
      const maxResults = 20;
      return query
        ? BooksAPI.search(query, maxResults)
            .then(searchResults => {
              this.setState({ searchResults })
            })
        : this.setState( { searchResults: [] })
    }
  }

  componentDidMount() {
    this.utils.getAllBooks()
  }

  render() {
    const { storedBooks, searchResults, bookshelves } = this.state

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
            bookshelves={bookshelves}
            books={storedBooks}
            utils={this.utils}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp

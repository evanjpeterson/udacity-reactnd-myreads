import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
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
        <Route exact path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {bookshelves.map(([shelf, title], index) =>
                <Bookshelf
                  title={title}
                  books={storedBooks.filter(book => book.shelf === shelf)}
                  key={index}
                />
              )}
            </div>
            <div className="open-search">
              <Link
                to="/search"
              >Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp

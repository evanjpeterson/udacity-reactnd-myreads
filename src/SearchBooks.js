import React from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

class SearchBooks extends React.Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.props.utils.searchBooks(query.trim())
  }

  render() {
    const { query } = this.state
    const { results, storedBooks, utils } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            books={results}
            storedBooks={storedBooks}
            utils={utils}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooks

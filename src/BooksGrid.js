import React from 'react'
import Book from './Book'

class BooksGrid extends React.Component {

  render() {
    const { books, storedBooks, utils } = this.props

    return (
      <ol className="books-grid">
          {books.map((book, index) =>
            <li key={index}>
              <Book
                book={book}
                storedBooks={storedBooks}
                utils={utils}
              />
            </li>
          )}
      </ol>
    )
  }
}

export default BooksGrid

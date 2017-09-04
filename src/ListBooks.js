import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends React.Component {

    render() {
      const { bookshelves, books, utils } = this.props

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {bookshelves.map(([shelf, title], index) =>
              <Bookshelf
                title={title}
                books={books.filter(book => book.shelf === shelf)}
                utils={utils}
                key={index}
              />
            )}
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      )
    }
}

export default ListBooks

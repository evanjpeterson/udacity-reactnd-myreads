import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {

  render() {
    const { title, books } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {books.map((book, index) =>
                <Book
                  book={book}
                  key={index}
                />
              )}
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf

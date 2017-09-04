import React from 'react'
import BookshelfChanger from './BookshelfChanger'

class Book extends React.Component {

  render() {
    const { book, storedBooks, utils } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}>
          </div>
          <BookshelfChanger
            book={book}
            storedBooks={storedBooks}
            utils={utils}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Unknown'}</div>
      </div>
    )
  }
}

export default Book

import React from 'react'
import BooksGrid from './BooksGrid'

class Bookshelf extends React.Component {

  render() {
    const { title, books, utils } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={books}
            storedBooks={books}
            utils={utils}
          />
        </div>
      </div>
    )
  }
}

export default Bookshelf

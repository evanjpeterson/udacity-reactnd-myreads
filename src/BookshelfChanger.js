import React from 'react'
import * as Constants from './Constants'

class BookshelfChanger extends React.Component {

  constructor(props) {
    super(props)
    const { book, storedBooks } = props
    this.state = {
      selectedShelf: this.getShelf(book, storedBooks)
    }
  }

  componentWillReceiveProps({ book, storedBooks }) {
    this.setState({ selectedShelf: this.getShelf(book, storedBooks) })
  }

  getShelf = (book, storedBooks) => {
    const storedBook = storedBooks.find(storedBook =>
      storedBook.id === book.id
    )
    return storedBook ? storedBook.shelf : Constants.NONE
  }

  updateShelf = (shelf) => {
    const { book, utils } = this.props

    utils.updateShelf(book, shelf)
  }

  render() {
    const { selectedShelf } = this.state

    return (
      <div className="book-shelf-changer">
        <select
          value={selectedShelf}
          onChange={(event) => this.updateShelf(event.target.value)}
        >
          <option disabled>Move to...</option>
          {Constants.CATEGORIES.map(([shelf, title], index) =>
            <option
              value={shelf}
              key={index}
            >{title}</option>
          )}
        </select>
      </div>
    )
  }
}

export default BookshelfChanger

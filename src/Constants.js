export const CURRENTLY_READING = "currentlyReading"
export const WANT_TO_READ = "wantToRead"
export const READ = "read"
export const NONE = "none"

export const BOOKSHELVES = [
  [CURRENTLY_READING, "Currently Reading"],
  [WANT_TO_READ, "Want to Read"],
  [READ, "Read"]
]

export const CATEGORIES = BOOKSHELVES.concat([
  [NONE, "None"]
])

export const MAX_SEARCH_RESULTS = 20

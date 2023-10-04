let movies = []
let noMoreMovies = false

while (!noMoreMovies) {
  let movieName = prompt('Enter Movie Name.')
  let movieRating = prompt('Enter Movie Rating.')

  Number(movieRating)
  
  if (movieName !== null || movieRating !== null) {
    movies.push({
      title: movieName,
      imdb: movieRating 
    })
  } else {
    noMoreMovies = true
  }
}

// ! TESTING
// for (let movie of movies) {
//   console.log(`Movie Title: ${movie.title}\nMovie Rating: ${movie.imdb}`)
// }

console.log('Movies that has been rating less than 7:')
for (let movie of movies) {
  if (movie.imdb < 7) {
    console.log(`Movie Title: ${movie.title},\nMovie Rating: ${movie.imdb}`)
  }
}

console.log('Movies that has been rating greater or equal to 7:')
for (let movie of movies) {
  if (movie.imdb >= 7) {
    console.log(`Movie Title: ${movie.title},\nMovie Rating: ${movie.imdb}`)
  }
}
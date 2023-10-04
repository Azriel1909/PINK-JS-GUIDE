let i = 10

while (i <= 100) {
  console.log(i)
  i+=10
}

console.log('----------------')

let j = 100

while (j >= 10) {
  console.log(j)
  j-=10
}

console.log('----------------')

// let max = prompt('Enter the maximum value')
// let min = prompt('Enter the minimum value')

// if (max > min) {
//   while(max>=min){
//     console.log(max)
//     max-=10
//   }
// }

console.log('----------------')

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (let number of numbers) {
  console.log(number)
}

console.log('----------------')

for (let number of numbers) {
  if (number%2 === 0) {
    console.log(number)
  }
}

console.log('----------------')

for (let number of numbers) {
  if (number > 10 && number < 60) {
    console.log(number)
  }
}

console.log('----------------')

let movies = []
let noMoreMovies = false

while (!noMoreMovies) {
  let movieName = String(prompt('Enter Movie Name.'))
  let movieRating = Number(prompt('Enter Movie Rating.'))
  console.log(`Data: ${movieName}, Data Type: ${typeof(movieName)}`)
  console.log(`Data: ${movieRating}, Data Type: ${typeof(movieRating)}`)

  if (movieName != null && movieRating != null) {
    movies.push[{
      title: movieName,
      imdb: movieRating 
    }]
  } else {
    noMoreMovies = true
  }
}

for (let movie of movies) {
  console.log(movie)
}

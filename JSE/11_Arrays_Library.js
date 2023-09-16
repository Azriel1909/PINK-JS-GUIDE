let myLibrary = [
  {
    title: 'Speaking JavaScript',
    author: 'Axel Rauschmayer',
    pages: 460
  },
  {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    pages: 254
  },
  {
    title: 'Understanding EMACScript 6',
    author: 'Nicholas C. Zakas',
    pages: 352
  }
]

console.log(myLibrary)

myLibrary.push({
  title: 'Learning JavaScript Design Patterns',
  author: 'Addy Osmani',
  pages: 254
})

console.log('---------------------')
console.log(myLibrary)

console.log('---------------------')
let slicedBooks = myLibrary.slice(-2)
console.log(slicedBooks)

console.log('---------------------')
let deletedBook = myLibrary.shift()
console.log(deletedBook)
console.log(myLibrary)

console.log('---------------------')

book1 = myLibrary[0].pages;
book2 = myLibrary[1].pages;
book3 = myLibrary[2].pages;

console.log(`Data Types: ${typeof(book1)}, ${typeof(book2)}, ${typeof(book3)}`)

let totalPages = book1 + book2 + book3;
console.log(`Total Pages = ${totalPages}`)

// let sum = myLibrary[0].pages + myLibrary[1].pages + myLibrary[2].pages; console.log(`pages: ${sum}`);
// console.log(sum)

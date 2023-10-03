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

let max = prompt('Enter the maximum value')
let min = prompt('Enter the minimum value')

if (max > min) {
  while(max>=min){
    console.log(max)
    max-=10
  }
}

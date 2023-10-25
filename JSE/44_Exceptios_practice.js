function div(a,b){
  if (b === 0){
    throw new RangeError('Dividing by zero is infinity.')
  }
  return a/b
}
console.log(div(9,3))

try {
  console.log(div(9,0))
} catch (error) {
  console.log(`> ${error}`)
}


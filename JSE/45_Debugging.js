function largest(a,b,c) {
  if (a>b && a>c) {
    return a
  } else if (b>a && b>c) {
    return b
  } else {
    return c
  }
}

console.log(largest(2,3,4))
console.log(largest(4,3,2))
console.log(largest(3,4,2))
console.log(largest(3,3,1))

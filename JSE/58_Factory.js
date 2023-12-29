let createdColoredPoint = function(x,y,color) {
  let _info = '... Object under construction'
  let _color = color
  // ? Naming Convention for private methods and variables
  console.log(`Information: ${_info}`)
  return {
    x,
    y,
    getColor() { return _color}
  }
}
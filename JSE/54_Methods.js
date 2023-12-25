// > Methods

let circle = {
  r: 100, // Radius
  c: { // Center
    x:0,
    y:0
  },

  // - Method 1
  /*getType: function() {
    return 'Circle'
  }*/

  // - Method 2
  getType() {
    return 'Circle'
  }
}

// ! In order to call up the method, we usually use Dot Notation

// - Point to the object, name the method, and then add the parenthesis
console.log(circle.getType())

// ! The method can also be called up using the Bracket Notation

console.log(circle['getType']())

// > The 'this' keyword: The easiest way to access the object is by refer it to its name

let mySuperCircle = {
  radius: 100,
  center: {
    x: 0,
    y: 0
  },
  getType() {
    return (typeof mySuperCircle.radius === 'number') ?
    'Circle' : 'unknown'
  }
}

console.log(mySuperCircle.getType())
let circle = {
  radius: 100,
  center: {
      x: 0,
      y:0
  },
  getType () {
      return "circle";
  }
};

console.log(circle.getType());
console.log(circle["getType"]() );


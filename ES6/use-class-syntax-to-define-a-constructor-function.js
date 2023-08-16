/**
 * Use class syntax
 * Class Keyword
 * A class declaration has a constructor method that is invoked
 * with class keyword.
 * 
 * If the constructor method is not explicitly defined, 
 * then it is implicitly defined with no arguments.
 */

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}


const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
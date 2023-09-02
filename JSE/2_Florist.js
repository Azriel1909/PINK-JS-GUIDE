let rose = 'Rose';
let lily = 'Lily';
let tulip = 'Tulip';

let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let roseQuantity= 50;
let lilyQuantity= 20;
let tulipQuantity = 120;

let roseValue = 400;
let lilyValue = 200;
let tulipValue = 240;

function floristMechanism(flower, price, quantity, value) {
  console.log(flower + ' - unit price: ' + price +
  ', quantity: '+ quantity + ', value: '+ value );
};

floristMechanism(rose, rosePrice, roseQuantity, roseValue);
floristMechanism(lily, lilyPrice, lilyQuantity, lilyValue);
floristMechanism(tulip, tulipPrice, tulipQuantity, tulipValue);

let total = roseValue + lilyValue + tulipValue
console.log('Total: ' + total);


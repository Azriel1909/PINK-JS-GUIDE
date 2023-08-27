/**
 * slice() method
 * It copies or extracts a given number of elements to a new array.
 * Parameter 1 = index
 * parameter 2 = index to stop the extraction
 */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
console.log(weatherConditions);
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather);

function forecast(arr) {
  arr = arr.slice(2, 4);
  return arr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
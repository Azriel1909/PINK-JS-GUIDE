
class Thermostat {
  constructor(fah) {
    this._fah = fah;
  }
  // Getter
  get temperature() {
    // obtain the temperature in Celsius
    return (5/9 * (this._fah - 32));
  }
  // Setter
  set temperature(cel) {
    // set the temperature in Celsius
    this._fah = (cel * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);


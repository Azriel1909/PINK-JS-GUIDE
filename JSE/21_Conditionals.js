// + Conditional Operator

let myPrice = 100
let shippingCost

if (myPrice > 50) {
  shippingCost = 0
} else {
  shippingCost = 5
}

console.log('---------------------------------------')
console.log(`The Price: ${myPrice} \nThe total shipping cost: ${shippingCost}`)

// * Ternary Operator Method

shippingCost = myPrice > 50 ? 0 : 5
console.log('---------------------------------------')
console.log(`The Price: ${myPrice} \nThe total shipping cost: ${shippingCost}`)

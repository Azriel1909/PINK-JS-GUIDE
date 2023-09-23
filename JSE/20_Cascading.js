// * My Variables

const INSURANCE_COST = 2.99

let shippingCost = 9.99
let myOrderIsValid = true

let userAge = 20
let points = 400
let cartValue = 200
let hasPromoCode = false
let hasParentsApproval = false
let addInsurance = true

// * Calculating shipping cost

if ((userAge > 60) || (userAge >= 20 && (hasPromoCode || cartValue > 300 || points < 500))) {
  shippingCost = 0
  console.log(`Total Shipping Cost: ${shippingCost}`)
} else if (userAge < 21 && hasParentsApproval) {
  shippingCost = shippingCost - 5
  console.log(`Total Shipping Cost: ${shippingCost}`)
} else {
  myOrderIsValid = false
  console.log('Your order is not valid!')
}

// * Calculating Insurance Cost

if (myOrderIsValid && addInsurance && !hasPromoCode) {
  shippingCost += INSURANCE_COST
  console.log(`Total Insurance Cost: ${shippingCost}`)
}



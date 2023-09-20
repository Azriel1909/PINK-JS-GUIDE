// > The operators are executed in the order we know from math. First, multiplication is performed, then addition, and at the end the resulting value is assigned to the variable.

// * JavaScript interpretes uses two operator properties to determine the sequence pf operations: precedence and associativity. 

let a = 10
let b = a + 2 * 3
let c = a + 2 < 20 - 15 
console.log(a)
console.log(b)
console.log(c)

// > Precedence can be treated as a priority, with some operators having the same precedence.

// * Precedence can be presented as a numerical value "the higher the value, the higher the priority of the operation", for example, an Operator_1 has smaller precedence than Operator_2 then the instruction will be:

// > a Operator_1 b Operator_2 c

// * 1st, Operator_2 will be executed on operands b and c, then Operator_1 will be executed on the left operand a and the right operand, resulting from Operator_2.

// > a Operator_1 ( b Operator_2 c )

// * If we perform the same operations (or different operations but with the same precedence), the interpreter uses associativity to determine the order of operations.

// ? Operators may have specific left-associativity (left to right order) or right-associativity (right to left order)

// > Associativity allows you to specify the order of execution if there are several operators with the same priorities next to each other.

let d, e
d = (e = (20 + 20) * 2) > (3 ** 2)
console.log(e)
console.log(d)

// ! The uses of parentheses not only forces the order of actions, but also increases the readability of the code.
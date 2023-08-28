/**
 * Arrays can contain, or even be completely made up of 
 * other arrays (multi-dimensional, or nested array).
 */

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
console.log(nestedArray[2][1][0][0][0]);
nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);


let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested', ['deep']],
  ['loop', 'shift', 6, 7, 1000, 'method', [['deeper']]],
  ['concat', false, true, 'spread', 'array', [[['deepest']]]],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary',[[['depth']]]]


];
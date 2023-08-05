/** Adding a default Option in Switch Statement
 * Default
 */

function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case 'a':
      answer = 'apple';
      console.log(answer);
      break;
    case 'b':
      answer = 'bird';
      console.log(answer);
      break;
    case 'c':
      answer = 'cat';
      console.log(answer);
      break;
    default:
      answer = 'stuff';
      console.log(answer);
      break;
  }
  return answer;
}

switchOfStuff('a');

function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      console.log(answer);
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      console.log(answer);
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      console.log(answer);
      break;
  }
  return answer;
}

sequentialSizes(1);
sequentialSizes(2);
sequentialSizes(3);
sequentialSizes(4);
sequentialSizes(5);
sequentialSizes(6);
sequentialSizes(7);
sequentialSizes(8);
sequentialSizes(9);


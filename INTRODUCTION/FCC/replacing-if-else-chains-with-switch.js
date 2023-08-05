function chainToSwitch(val) {
  let answer = "";
  /*
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  */

  switch (val) {
    case 'bob':
      answer = 'Marley';
      console.log(answer);
      break;
    case 42:
      answer = 'The Answer';
      console.log(answer);
      break;
    case 1:
      answer = 'There is no #1';
      console.log(answer);
      break;
    case 99:
      answer = 'Missed me by this much!';
      console.log(answer);
      break;
    case 7:
      answer = 'Ate Nine';
      console.log(answer);
      break;
  }

  return answer;
}

chainToSwitch(7);
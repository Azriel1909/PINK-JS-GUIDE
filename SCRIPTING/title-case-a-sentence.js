function titleCase(str) {
  let capitalLetter = str.toLowerCase().split(' ');
  for (let i = 0; i < capitalLetter.length; i++) {
    capitalLetter[i] = capitalLetter[i].charAt(0).toUpperCase() + 
    capitalLetter[i].substring(1);
  }
  return capitalLetter.join(' ');
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));
/**
 * There is also an option that matches character that occur zero
 * or more times, it is the asterisk '*'.
 */

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);
console.log(result);
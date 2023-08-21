let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z][A-Za-z]+\d*$|^[A-Zz-z]\d\d+$/;
/**
 * ^ Matches the beginning of input.
 * + Matches the prededing item one or more times
 * \d Matches any digit
 * $ Matches the end of input
 */
let result = userCheck.test(username);
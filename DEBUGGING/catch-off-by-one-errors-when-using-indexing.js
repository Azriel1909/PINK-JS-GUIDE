/**
 * Off by one errors (sometimes called OBOE) crop up when you're
 * trying to target a specific index of a string or array (to
 * slice or access a segment), or when looping over the indices
 * of them. JavaScript indexing starts at zero, not one, which
 * means the last index is always one less than the length of
 * the item. 
 */

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();
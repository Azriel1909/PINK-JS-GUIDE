/**
 * A promise has three states:
 * 1. Pending
 * 2. Fullfilled
 * 3. Rejected
 * 
 * Example
 
 const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

 */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve('We got the data');
  } else {  
    reject('Data not received');
  }
});
/**
 * Promises are most useful when you have a process that takes
 * an unknown amount of time in your code (i.e. something
 * asynchronous), often a server request.
 * 
 * The then method is executed immediately after your promise is
 * fulfilled with resolve.
 * 
 * Example
myPromise.then(result => {});
 */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
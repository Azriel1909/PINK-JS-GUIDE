// > Callback Functions: Functions that are passed as arguments to other functions

// - Synchronous Callbacks: It is executed in a strictly defined order resulting from where it is placed among the other instructions.

// * Synchronous Execution: Subsequent instructions are executed in the order which they are place in the code.

console.log('---------------- Synchronous Execution')

let inner = function() {
  console.log('Inner')
}

let outer = function(callback) {
  console.log('Outer 1')
  callback()
  console.log('Outer 2')
}

console.log('Test 1')
outer(inner)

// * Asynchronous Callbacks: In this case of client-side JavaScript running in the browser, it is limited to event-based programming, the asynchronous response to certain events. An event can be a signal sent by timer, a user action (clicking on a selected interface element), or informing about the receiving data from server.

// * There is asynchronous execution of instructions in setTimeout Function. This function takes another function (a callback) and the time expressed in milliseconds as arguments. The callback function is executed after tge specified time.

// - Thus the moment the callback function is called it is not determined by its order, but by an arbitrarily imposed delay (only applies to the callback function given to the setTimeout).

console.log('---------------- Asynchronous Execution')

let inner2 = function() {
  console.log('Inner 1')
}

let outer2 = function(callback) {
  console.log('Outer 1')
  setTimeout(callback, 2000)
  console.log('Outer 2')
}

console.log('Test 1')
outer2(inner2)
console.log('Test 2')

// > serTimeout and setInterval

// - setTimeout: It is used when you want to cause a delay action. 

// + setInterval: This action is also performed with delay, but periodically, so it is repeated at fixed intervals. It returns an ID during the call, which can be used to remove their timer used in it (and consequently to stop tje cyclical callback function call). 

console.log('---------------- serTimeout and setInterval')

let inner3 = function() {
  console.log('Inner 1')
}

let outer3 = function(callback) {
  console.log('Outer 1')
  let timerId = setInterval(callback, 1000)
  console.log('Outer 2')
  setTimeout(function() {
    clearInterval(timerId)
  }, 5500)
}

console.log('Test 1')
outer3(inner3)
console.log('Test 2')


// -- Asynchronous Functions calls are related to slightly different situations, they are determined by events not related to timers, but rather generated outside the program.

// ? The Window Object has a method (or its own function) named addEventListener. This function allows you to register a certain action to be performed in response to a window-related event.

// - The action to be taken is passed to the addEventListener as a callback function.

// window.addEventListener('click', function() {
//   console.log('clicked!')
// })
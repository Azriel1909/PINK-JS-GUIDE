// * The user influences not only the data, but also its execution. THe user gives a path data to the program being run in this way in the form of a configuration file and/or as call arguments.

// * DOM (Document Object Model)

// > Dialog Boxes: Are popup windows (modal windows) which mean that when the dialog box is displayed, it is not possible to interact with the webpage itself until this dialog box is closed.

// + Alert Dialog Box: We need to call a method name alert(). This method accept one optional parameter (the text that will be displayed).

// ? The alert method is method of the object window, ti can be used both, alert() or window.alert. 

alert('Hi, my name is Ximena!')
window.alert('Hello, World! Again!')
alert(4 * 7)
alert(false)
alert('Some milk', 'Some sugar')

// + Confirm Dialog Box: Similar to the alert method, the difference between alert and confirm is that confirm dialog box displays to buttons, the OK button and the Cancel button. Depending on button pressed by the user, the confirm method returns a Boolean value. OK -> true and Cancel -> false

let myDecision = window.confirm('It that OK?')
console.log(myDecision)

let removeQuestion = confirm('Remove all data?')
let myMessage = removeQuestion ? 'Deleting Data...' : 'Cancelled'
console.log(myMessage)

// + Prompt Dialog Box: like a confirm dialog box (it contains the OK and Cancel buttons), but also contains a single-line text field that allows the user to input text.

// * As with other dialog boxes, the prompt accepts an optional parameter as a message that will be displayed. The prompt also accepts a second optional parameter, which is the default value of the text field visible in the dialog window. 

// * If the user closes the window with the OK button, anything in the text field will be returned from the prompt method as a String, if the dialog box is closed with the Cancel button, the method will return a null value.

let myFood = window.prompt('What is your favorite food? ', 'pizza')
myFood = myFood ? myFood : 'Anonymous'
let myDrink = prompt('My favorite food is ' + myFood +', What is your favorite drink? ')
alert('My favorite drink is ' + myDrink + ' of course!')
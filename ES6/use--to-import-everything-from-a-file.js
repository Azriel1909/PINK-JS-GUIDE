/**
 * If you have a file and tou wish to import all
 * of its contents into the current file, you can use
 * 'import * as' syntax.
 * 
 * Example
 * import * as myMathModule from "./math_functions.js";
 * 
 * The above import statement will create an object called
 * myMathModule. This is just a variable name, you can name it
 * anything. The object will contain all of the exports from
 * math_functions.js in it, so you can access the functions like
 * you would any other object property.
 * 
 * Example
 * myMathModule.add(2,3);
 * myMathModule.subtract(5,3);
 */

import * as stringFunctions from "./string_functions.js";


stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
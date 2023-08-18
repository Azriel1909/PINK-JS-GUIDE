/**
 * Import allows you to choose which parts of file or module
 * to load.
 * 
 * Example:
 * import { add } from './math_functions.js';
 * 
 * The ./ tells the import to look for the math_functions.js
 * file in the same folder as the current file. The relative
 * file path (./) and file extension (.js) are required when
 * using import in this way.
 */
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
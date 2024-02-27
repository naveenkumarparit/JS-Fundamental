function testRegex (pattern, inputString) {
    return pattern.test(inputString);
}

const pattern1 = /\d+/;  // Mathces one or more digits
const pattern2 = /[A-Z]/;  // Matches any uppercase letter
const pattern3 = /^Hello/;  // Mahthes if the string starts with "Hello"
const pattern4 = /world$/  // Matches if the string ends with "world"

const string1 = "123abc";
const string2 = "Hello, world";
const string3 = "Programming is fun";
const string4 = "Bye bye, world";

console.log("Pattern 1 matches string 1 :", testRegex(pattern1, string1));
console.log("Pattern 2  matches string 2 :", testRegex(pattern2, string2));
console.log("Pattern 3 matches string 3 :", testRegex(pattern3, string3));
console.log("Pattern 4 matches string 4 :", testRegex(pattern4, string4));
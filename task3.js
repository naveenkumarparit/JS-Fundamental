function searchCharacterClasses (inputString) {
    // Regex fr character classes
    const digitPattern = /\d/g;  // Matches charatcer in range "0" to "9" 
    const lowercasePattern = /[a-z]/g;  // Matches charatcer in range "a" to "z" (Case sensitive)
    const uppercasePattern = /[A-Z]/g;  // Matches charatcer in range "A" to "Z" (Case sensitive)
    const specialCharPattern = /[^a-zA-z0-9 ]/g; // Matches any character that is not an alphabate, digit or space

    function testRegex (pattern) {
        return inputString.match(pattern);
    }

    return {
        digits: testRegex(digitPattern),
        uppercaseLetters: testRegex(uppercasePattern),
        lowercaseLetters: testRegex(lowercasePattern),
        specialCharacters: testRegex(specialCharPattern) 
    }
}

const inputString = "Hello123! How's you doin?"
const matches = searchCharacterClasses(inputString);

console.log("Input String : ", inputString);
console.log("Digits : ", matches.digits);
console.log("Uppercase Letters : ", matches.uppercaseLetters);
console.log("Lowercase Letters : ", matches.lowercaseLetters);
console.log("Special Characters : ", matches.specialCharacters);
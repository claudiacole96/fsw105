//String Exercise
//Make a function that will return any given string into all caps followed by the same string all lowercase.

function upperAndLowerCaseStrings(str) {
    console.log( "First Upper Case: " + str.toUpperCase() + " Then Lower Case: " + str.toLowerCase() );
}
upperAndLowerCaseStrings("Hello World!");

//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function halfStringLengthRoundedDown(str) {
    console.log( "Half of length of " + str + " is: " + Math.floor(str.length / 2) );
}
halfStringLengthRoundedDown("Hello World");

//Make a function that uses slice() and the other functions you've written to return the first half of the string.

function halfStringRoundedDown(str) {
    console.log( "Half of " + str + " is: " + str.slice( 0, Math.floor(str.length/2) ) );
}
halfStringRoundedDown("Hello World");

//Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
//(If the string length is odd, capitalize the shorter of the first half.)

function halfStringUpperHalfLower(str) {
    let firstHalfUpper = str.slice( 0, Math.floor(str.length / 2) );
    let lastHalfLower = str.slice( Math.floor(str.length / 2), str.length );
    console.log( "First half of string Uppercase, Last half Lowercase: " + firstHalfUpper.toUpperCase() + lastHalfLower.toLowerCase() );
}
halfStringUpperHalfLower("Hello World");

//EXTRA CREDIT!
//Make a function that takes any string and capitalizes any character that follows a space.

function uppercaseFirstLetters(str) {
    var words = str.split(" ");
    var result = words.map(
        function(val){
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
    return result.join(" ");
}
console.log( uppercaseFirstLetters("hey friends! practice practice practice!") );
//functions

//sum of two numbers
function sum( num1, num2 ) {
    return num1 + num2
}
console.log( sum(72, 38) )

//find the largest of three numbers
function largestOfThree( a, b, c ) {
    return Math.max(a, b, c)
}
console.log( largestOfThree(1, 2, 3) )

//tells you if number is even or odd
function evenOrOdd( num1 ) {
    var result = num1 % 2
    if ( result === 0 ) {
        return "even"
    } else {
        return "odd"
    }
}
console.log( evenOrOdd(8) )

//return string longer than 20 characters or two strings if less than 20
function stringDoubleOrNot( string ) {
    if ( string.length < 20 ) {
        return string + " " + string
    } else {
        return string.slice(0, string.length / 2)
    }
}
console.log( stringDoubleOrNot("Hello my name is") )
console.log( stringDoubleOrNot("This sentence is longer than 20 characters") )

//extra credit
//sum of specified length of first numbers in an array
var numbers = [7, 3, 2, 6, 7, 4, 9, 1, 3]
function sumOfNNumbers( n ) {
    return numbers.slice(0, n).reduce( ( a, b ) => {
        return a + b;
    }, 0 );
}
console.log( sumOfNNumbers(4) )

//most frequent letter character in string

function mostOccuringCharacter( string ) {
    const stringObject = {};
    var max = 0;
    var maxChar = "";
    for ( let char of string ) {
        if ( stringObject[char] ) {
            stringObject[char]++;
        } else {
            stringObject[char] = 1;
        }
    }
    for ( let char in stringObject ) {
        if ( stringObject[char] > max ) {
            max = stringObject[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log( mostOccuringCharacter("Peter Piper picked a peck of pickled peppers") )
// Section A  Use the built-in array method .filter() to solve all of these problems:
// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num >= 5);
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(evensOnly([3, 6, 8, 2]));

// Extra Credit) Make a filtered list of all the people who are old enough to see The Matrix (17+).

function ofAge(arr) {
    return arr.filter(person => person.age >= 17);
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));



// Section B  Use the built-in .map() method on arrays to solve all of these problems:
// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}
console.log(doubleNumbers([2, 5, 100]));

// 2) Take an array of numbers and make them strings

function stringItUp(arr) {
    return arr.map(num => num.toString());
}
console.log(stringItUp([2, 5, 100]));

// 3) Capitalize each of an array of names

function capitalizeNames(arr) {
    return arr.map(function(name) {
        var firstLetter = name.slice(0, 1);
        var otherLetters = name.slice(1);
        return firstLetter.toUpperCase() + otherLetters.toLowerCase();
    })
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Extra Credit 1) Make an array of strings of the names

function namesOnly(arr) {
    return arr.map(function(person) {
        return person.name;
    })
}
console.log(namesOnly([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

// Extra Credit 2) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr) {
    var oldEnough = arr.filter(person => person.age >= 17);
    return oldEnough.map(person => person.name + " can go see The Matrix.");
}
console.log(makeStrings([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));



// Section C  Use the built-in .reduce() method on arrays to solve all of these problems:
// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
    return arr.reduce(function(final, num) {
        final += num;
        return final;
    }, 0)
}
console.log(total([1, 2, 3]));

// 2) Turn an array of numbers into a long string of all those numbers

function stringConcat(arr) {
    return arr.reduce(function(final, num) {
        final.push(num.toString());
        return final;
    }, [])
}
console.log(stringConcat([1, 2, 3]));

// 3) Turn an array of voter objects into a count of how many people voted
// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this

function totalVotes(arr) {
    return arr.reduce(function(final, voter) {
        if (voter.voted === true) {
            final++;
        }
        return final;
    }, 0)
}
var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false }
];
console.log(totalVotes(voters));

// Extra Credit 1) Given an array of all your wishlist items, return the total cost of all items

function shoppingSpree(arr) {
    return arr.reduce(function(final, item) {
        final += item.price;
        return final;
    }, 0)
}
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
console.log(shoppingSpree(wishlist));

// Extra Credit 2) Given an array of arrays, flatten them into a single array
// Note: Take a look at Array.concat() to help with this one

function flatten(arr) {
    return arr.reduce(function(final, array) {
        return final.concat(array);
    }, [])
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));



// Section D   Use the built-in .sort() method on arrays to solve all of these problems:
// 1) Sort an array from smallest number to largest

function leastToGreatest(arr) {
    return arr.sort(function(num1, num2) {
        return num1 - num2;
    })
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

// 2) Sort an array from largest number to smallest

function greatestToLeast(arr) {
    return arr.sort(function(num1, num2) {
        return num2 - num1;
    })
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

// 3) Sort an array from shortest string to longest

function lengthSort(arr) {
    return arr.sort(function(a, b) {
        return a.length - b.length;
    })
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// Extra Credit 1) Sort an array alphabetically

function alphabetical(arr) {
    return arr.sort();
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

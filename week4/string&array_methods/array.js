//Array Methods Exercise

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Make sure to console.log and add context to beginning of logs Ex: ("fruit: ", fruit)
//1 Remove the last item from the vegetable array.

function removeLastVegetable() {
    vegetables.pop();
    console.log( "vegetables: " + vegetables );
}
removeLastVegetable();

//2 Remove the first item from the fruit array.

function removeFirstFruit() {
    fruit.shift();
    console.log( "fruit: " + fruit );
}
removeFirstFruit();

//3 Find the index of "orange."

function whatIsIndexOfOrange() {
    var orangeIndex = fruit.indexOf("orange");
    return orangeIndex;
}
console.log(whatIsIndexOfOrange());

//4 Add that number to the end of the fruit array.

function pushFruitToArray() {
    fruit.push(whatIsIndexOfOrange());
    return fruit;
}
console.log(pushFruitToArray());

//5 Use the length property to find the length of the vegetable array.

function lengthOfVegetableArr() {
    return vegetables.length;
}
console.log(lengthOfVegetableArr());

//6 Add that number to the end of the vegetable array.

function pushVegetablesToArray() {
    vegetables.push(lengthOfVegetableArr());
    return vegetables;
}
console.log(pushVegetablesToArray());

//7 Put the two arrays together into one array. Fruit first. Call the new Array "food".

function addTwoArrays(a, b) {
    var a = fruit;
    var b = vegetables;
    var food = a.concat(b);
    return food;
}
var food = addTwoArrays();
console.log(food);

//8 Remove 2 elements from your new array starting at index 4 with one method.

function removeTwo() {
    food.splice(4, 2);
    return food;
}
console.log(removeTwo());

//9 Reverse your array.

function reverseArr() {
    return food.reverse();
}
console.log(reverseArr());

//10 Turn the array into a string and return it.

function arrayToString() {
    return food.join(", ");
}
console.log(arrayToString());
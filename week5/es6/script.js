// 1 Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work
// (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and
// const.

// John is the pet owner, and his name should be stored differently than the other names.

const petOwner = "John";
let name = ""
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", petOwner)
    return petObjects
}

runForLoop(["cat", "dog"])

// 2 Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an
// object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map( carrot => {return { type: "carrot", name: carrot }});
}
console.log(mapVegetables(carrots));

// 3 Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter( person => person.friendly );
}
console.log(filterForFriendly(people));

// 4 Re-write the following functions to be arrow functions:

const doMathSum = (a, b) => a + b;
console.log(doMathSum(5, 9));

const produceProduct = (a, b) => a * b;
console.log(produceProduct(5, 9));

// 5 Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the
// following:
//   "Hi Kat Stark, how does it feel to be 40?"
//   firstName default "Jane"
//   lastName default "Doe"
//   age default 100

const printString = (firstName = "Jane", lastName = "Doe", age = 100) => "Hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?";
console.log(printString("Kat", "Stark", 40));

// 6 Use template literals to build the string from #5

const printStringTwo = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
console.log(printStringTwo("Kat", "Stark", 40));

// 7 Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

const filterForDogs = arr => arr.filter( animal => animal.type === "dog");
console.log(filterForDogs(animals));

// 8 Using template literals, write a function that takes location and name parameters and outputs a message
// formatted like this:
//   Hi Janice
//   Welcome to Hawaii
//   I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

const welcomeMessage = (location, name) => (`Hi ${name}${'\n'}Welcome to ${location}${'\n'}I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`);
console.log(welcomeMessage("Hawaii", "Janice"));
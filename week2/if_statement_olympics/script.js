// 1. Write an if statement that prints "is greater than" if 5 is greater than 3

if (5 > 3) {
    console.log("is greater than")
}

// 2. Write an if statement that prints "is the length" if the length of "cat" is 3

var cat = "cat";
if (cat.length === 3) {
    console.log("is the length")
}

// 3. Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal

if ("cat" === "dog") {
    console.log("the same")
} else {
    console.log("not the same")
}

// Bronze:
    //1
    var person = {
        name: "Bobby",
        age: 12
    }
    if (person.age >= 18) {
        console.log(person.name + " is allowed to go to the movie")
    } else {
        console.log(person.name + " is NOT allowed to go to the movie")
    }
    //2
    if (person.name[0] === "B") {
        console.log(person.name + " is allowed to go to the movie")
    } else {
        console.log(person.name + " is NOT allowed to go to the movie")
    }
    //3
    if (person.name[0] === "B" && person.age >= 18) {
        console.log(person.name + " is allowed to go to the movie")
    } else {
        console.log(person.name + " is NOT allowed to go to the movie")
    }

// Silver:
    //1
        if (1 === "1") {
            console.log("strict")
        } else if (1 == "1") {
            console.log("loose")
        } else {
            console.log("not equal at all")
        }
    //2
        if (1 <= 2 && 2 === 4) {
            console.log("yes")
        }

// Gold:
    //1
    var greaterThan = 5 > 3 ? "is greater than" : "false";
    console.log(greaterThan);

    var catLength = "cat".length === 3 ? "true" : "false" ;
    console.log(catLength);

    var catDog = "cat" === "dog" ? "the same" : "not the same";
    console.log(catDog);

    var canPersonGoToMovie1 = person.name + (person.age >= 18 ? " is allowed to go to the movie" : " is NOT allowed to go to the movie");
    console.log(canPersonGoToMovie1);
    var canPersonGoToMovie2 = person.name + (person.name[0] === "B" ? " is allowed to go to the movie" : " is NOT allowed to go to the movie");
    console.log(canPersonGoToMovie2);
    var canPersonGoToMovie3 = person.name + (person.age >= 18 && person.name[0] === "B" ? " is allowed to go to the movie" : " is NOT allowed to go to the movie");
    console.log(canPersonGoToMovie3);

    //2
    if (1 <= 2 && 2 === 4) {
        console.log("yes")
    }
    
    //2
        if (typeof "dog" === "string") {
            console.log("string")
        }
    //3
        if (typeof true === "boolean") {
            console.log("boolean")
        }
    //4
        if (variable != null) {
            console.log("defined")
        } else {
            console.log("undefined")
        }
    //5
        if ("S" > 12) {
            console.log(true)
        } else {
            console.log(false)
        }
    //6
        if ("F" > 17) {
            console.log(true)
        } else if ("R" > 72) {
            console.log(true)
        } else if ("T" > 12) {
            console.log(true)
        } else {
            console.log(false)
        }
    //7
        var num = 17;
        if (num % 2 === 0) {
            console.log("even")
        } else {
            console.log("odd")
        }
    // ^^ Super Excited I figured that one out!!! :)
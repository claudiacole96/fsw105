var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

//1.
for ( i = 0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++ ) {
    if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 ) {
        console.log( "not old enough" )
    } else {
        console.log( "old enough" )
    }
}

//2.
for ( i = 0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++ ) {
    if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 ) {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max" )
    } else {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max" )
    }
}

//3.
for ( i = 0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++ ) {
    if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ) {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in." )
    } else if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ) {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let her in." )
    } else if ( peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ) {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let him in." )
    } else if ( peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ) {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let her in." )
    }
}

//4.
for ( i = 0; i < 101; i++ ) {
    if ( i % 2 === 0) {
        console.log( "even" )
    } else {
        console.log( "odd" )
    }
}

//Extra credit

var numbers = [
    [2, 5, 436, 4, 3],
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
]
for ( i = 0; i < numbers.length; i++ ) {
    var sum = numbers[i].reduce( function( a, b ) {
        return a + b;
    }, 0 );
    if ( sum % 2 === 0 ) {
        console.log( "The light is off" )
    } else {
        console.log( "The light is on" )
    }
}

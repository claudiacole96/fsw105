const readline = require("readline-sync");

//get player name
const playerName = readline.question("What is your name?")

//build a welcome message
const welcomeMessage = `Hello, ${playerName}. Welcome to the Escape Game. We hope you make it out safely.`;
console.log(welcomeMessage);

//add storyline to game
const storyLine = `You are locked inside a room. There is only one door, and it's locked. You must find the key to get out. Your time starts now.`;
console.log(storyLine);

//booleans for player life and have they found the key
let playerLife = true;
let hasFoundKey = false;

//booleans for searching
let desk = false;
let trash = false;
let aboveDoor = false;
let box = false;
let guitar = false;

//array for searching booleans so they can be individually selected and changed to true
const placesToSearch = [desk, trash, aboveDoor, box, guitar];

//random number generator to get a random location the key is hidden every time you play the game, the hiding spot will never be the same
let randomNumber = () => (Math.floor(Math.random() * 5)) + 1;
let hiddenKey = randomNumber();

//found key and not found key messages for DRY coding
const foundKeyMessage = "Congratulations, you have found the key! Please proceed to open the door!";
const noKeyFoundMessage = "You did not find the key. Keep trying.";

//while loop for game
while (playerLife == true){
    //first menu options
    const menuId = readline.keyIn("Please enter an option below (1-3) \n 1) Put hand in hole \n 2) Find the Key \n 3) Open the Door", {limit: "$<1-3>"});
    if (menuId == 1) {
        console.log(`Oops! The alarm is sounded and you, ${playerName} did not escape. The game is OVER!`);
        playerLife = false;
    } else if (menuId == 2 && hasFoundKey == false) {
        while (hasFoundKey == false && playerLife == true) {
            //find key options
            const keySearchOptions = readline.keyIn("You look around the room to see five places to search for a key. Which place do you search first? \n1) The Desk \n2) The Trash \n3) Above The Door \n4) The Box \n5) The Guitar \n6) Open the door \n7) Quit Game", {limit: "$<1-7>"});
            
            if (keySearchOptions < 6) {
                for (i = 1; i < 6; i++){     // For loop to see what number was selected and then follow instructions in if statement
                    if (i == keySearchOptions) {
                        if (placesToSearch[i-1] == false) {
                            if (hiddenKey == i) {
                                console.log(foundKeyMessage);
                                hasFoundKey = true;
                            } else {
                                console.log(noKeyFoundMessage);
                            }
                            placesToSearch[i-1] = true;
                        } else if (placesToSearch[i-1] == true) {
                            console.log("You have already searched this place. Please keep looking!");
                        }
                    }
                }
            } else if (keySearchOptions == 6) {     // you can't return to the main menu without finding the key
                console.log("You have not found the key yet. Please keep searching!");
            } else if (keySearchOptions == 7) {     // this is a quit selection if someone gives up
                playerLife = false;
            }
        }   
    } else if (menuId == 2 && hasFoundKey == true) {
        console.log("You have already found the key, there is no need to continue searching.");
    } else if (menuId == 3) {
        if (hasFoundKey == false) {
            console.log("You have not found the key yet. Please keep searching!");
        } else if (hasFoundKey == true) {
            console.log("Congratulation! You have found the key and you have escaped!");
            playerLife = false;
        }
    }
}
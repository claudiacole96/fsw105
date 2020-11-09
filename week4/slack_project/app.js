var scores = require("./scores");
var highScore = 0
function whatIsTheHighScore() {
    for (i = 0; i < scores.length; i++) {
        if (scores[i].score > highScore) {
            highScore = scores[i].score;
        }
    }
    for (i = 0; i < scores.length; i++) {
        if (scores[i].score === highScore) {
            console.log("Current High Score is: " + scores[i].name + " with " + scores[i].score + " points!");
        }
    }
}

whatIsTheHighScore();
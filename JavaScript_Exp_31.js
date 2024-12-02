//create a game where you start with any random game number. ask the user to keep guessing the name until the user enters correct number

let gameNum = 25;
let userNum = prompt("Guess the Game Number:");


while(userNum != gameNum){
    //game logic
    userNum = prompt("You entered wrong number, Guess again:");
}
console.log("Congatulations, you entered right number");
/*
    class = a blueprint for creating objects.
            Define what properties and methods they have.
            Use a constructor for unique properties
*/

// creating a player class
class Player{
    score = 0;

    pause(){
        console.log("You paused the game")
    }
    exit(){
        console.log("You exited the game");
    }
}
//creating a object
const player1 = new Player();
const player2 = new Player();

player1.score += 1;
console.log(player1.score);
player1.pause();
player1.exit();

player2.score += 10;
console.log(player2.score);
player2.pause();
player2.exit();
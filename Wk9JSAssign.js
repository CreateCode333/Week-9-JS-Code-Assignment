//   Instructions:
//In Visual Studio Code, write the code that accomplishes the objectives listed below and ensures that the code compiles and runs as directed.
//Comment your code, to prove that you understand what you have written -- this is required!
//Create a new repository on GitHub for this week's assignments and push your code to the repository.
//Create a Video showcasing your assignment.
//Submit the two URL links for the GitHub repo and Video in the Text box.
//Coding Steps:
//For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
//You do not need to do anything special when there is a tie in a round.
//Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
//You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.
//The completed project should, when executed, do the following:
//Deal 26 Cards to each Player from a Deck of 52 cards.
//Iterate through the turns where each Player plays a Card.
//The Player who played the higher card is awarded a point.
//Ties result in zero points for both Players.
//After all cards have been played, display the score and declare the winner.

//Instructions: Create an automated version of the card game WAR! with 2 players.
//Step #1 creating my first class; it includes the constructor with a value that coule eventually be the card #s 2 through 14, and the suit which could be hears, clubs, spades, or diamonds)
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

//Step #2: create my 2nd class, which is Deck. The constructor method is called when an instance
//of the class "Deck" is created using the "New" keyword. this.cards initializes an empty array 
//to stor the cards in the deck. 
class Deck {
    constructor() {
        this.cards = [];
        this.deal();
        this.shuffle();
    }
//I used the deal() method to populate this.cards with a standard set of playing cards.  
// The code "suit of suits" is a for of loop that iterates over elements of the array and 
//executes the block of code once for each element. I used console.log to help me understand what the value
//and suit of the cards might look like. You can see this in the console...
        deal() {
            const suits =['clubs', 'diamonds', 'hearts', 'spades'];
            for (let value = 2; value <= 14; value++) {
                console.log("Outer Loop", value)
                for (let suit of suits) {
                    console.log("Inner Loop", value, suit)
                    this.cards.push(new Card(value, suit));
                }
            }
        }
//I'm using the shuffle() method to shuffle the cards in this.cards using an appropriate shuffling algorithm (like the Fisher-Yates shuffle).
        shuffle(){
            for (let i = this.cards.length -1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];

            }
        }
 //I used the 'dealCard' method to remove and return the last card from the this.cards array
        dealCard() {
            return this.cards.pop();
        }
    }

    //Create a new class called Player (that represents a player in the game) with a constructor 
    //this.name = name initializes the name property of the  player object with the name
    //parameter. 
    class Player {
        constructor(name) {
            this.name = name;
            this.hand = [];
            this.points = 0;

        }
    //I used the playCard method to simulate the player playing a card from  their hand.
    //this.hand refers to the array that stores the player's cards. the .pop() is an arrray method
    //that removes the last element from the array and returns it.
        playCard(){
            return this.hand.pop();

        }
    }

    //I created a new class called Game. This sets up a constructor that sets up a game scenario with 
    //2 players. I created an array, this.players containing two instances of the 
    //Player class initialized with names player1Name and player2Name. These represents the two players 
    //participating in the game. 

    class Game {
        constructor(player1Name, player2Name) {
         this.players = [new Player(player1Name), new Player(player2Name)];
         this.deck = new Deck(); 
          
        }

//Deal cards to players. This part of the code executes a while loop  that continues as 
//long as there are cards remaining in the this.deck.cards array (indicating the deck is not empty).
//Inside the loop: this.players[0].hand.push(this.deck.dealCard()): Adds a card to the hand of players[0] 
//by calling the dealCard() method from the Deck class. This method removes and returns a card from the deck.
//Similarly, this.players[1].hand.push(this.deck.dealCard()) adds a card to the hand of players[1].

        startGame() {
            while (this.deck.cards.length > 0) {
                this.players[0].hand.push(this.deck.dealCard());
                this.players[1].hand.push(this.deck.dealCard());
            }
            //Play rounds until there are no cards left
            while (this.players[0].hand.length > 0) {
                this.playRound();
            }
            //Display final scores and declare the winner
            this.displayWinner();
        }
    //I used the playRound method to simulate a single round of the game between the 2 players. 
    //Each player plays a card from their hand, then using console.log, the cards are displayed by each
    //player. The if/else compares the cards and determines the winner of the round.
        playRound() {
            const card1 = this.players[0].playCard();
            const card2 = this.players[1].playCard();
            console.log(`${this.players[0].name} plays ${card1.value} of ${card1.suit}`);
            console.log(`${this.players[1].name} plays ${card2.value} of ${card2.suit}`);

            if (card1.value > card2.value) {
                this.players[0].points++
                console.log(`${this.players[0].name} wins the round.`);
            } else if (card2.value > card1.value) {
                this.players[1].points++;
                console.log(`${this.players[1].name} wins the round.`);
            } else {
                console.log('It is a tie.')
            }
        }
        //The code below displays the winner of the round.
        displayWinner() {
            const player1 = this.players[0];
            const player2 = this.players[1];
            console.log('Final Score:');
            console.log(`${player1.name}: ${player1.points} point(s)`);
            console.log(`${player2.name}: ${player2.points} point(s)`);

            if (player1.points > player2.points) {
                console.log(`${player1.name} wins the game.`);

            }else if (player2.points > player1.points) {
                console.log(`${player2.name} wins the game.`);
            }else {
            console.log("It's a tie.");
            }
        }
    }
    //I created a new instance of the game class and assigned it the variable game using new  game
    //Then I initialized the game with Player 1 and Player 2 which are passed as arguments
    //to the game constructor. The game is started using the startGame method on the game object.
    //
    const game = new Game("Player 1", "Player 2");
    game.startGame();

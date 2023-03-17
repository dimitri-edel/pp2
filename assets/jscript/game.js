/* 
    The user and computer can make a move. 
    A move uses one of the figures : rock, paper, scissors, lizzard or spock.    

    Let's say user picked rock and the computer picked paper. 
    +---------------------------+-----------------------------------------+
    |  ROCK FIGURE                                                        |
    +---------------------------+-----------------------------------------+
    | OPOSING INDEX             |  OUTCOME                                |
    +---------------------------+-----------------------------------------+
    | versus_rock               | draw                                    |  Since rock against rock is a draw
    +---------------------------+-----------------------------------------+
    | versus_paper              | loss                                    |  Because paper covers rock
    +---------------------------+-----------------------------------------+
    | versus_scissors           | win                                     |  Rock crushes scissors
    +---------------------------+-----------------------------------------+
    | versus_lizzard            | win                                     |  Rock crushes lizzard
    +---------------------------+-----------------------------------------+
    | versus_spock              | loss                                    |  Spock vaporizes rock
    +---------------------------+-----------------------------------------+

    +---------------------------+-----------------------------------------+
    |  PAPER                                                              |
    +---------------------------+-----------------------------------------+
    | OPOSING INDEX             |  OUTCOME                                |
    +---------------------------+-----------------------------------------+
    | versus_rock               | win                                     |  Paper covers rock
    +---------------------------+-----------------------------------------+
    | versus_paper              | draw                                    |  Paper on paper
    +---------------------------+-----------------------------------------+
    | versus_scissors           | loss                                    |  scissors cuts paper
    +---------------------------+-----------------------------------------+
    | versus_lizzard            | loss                                    |  Lizzard eats paper
    +---------------------------+-----------------------------------------+
    | versus_spock              | win                                     |  Paper disproves Spock
    +---------------------------+-----------------------------------------+

    we just asign the outcome of every possible oposing move in a table (array).
    Then we can cross-referrence the outcome by using the index of the oposing move.

    User picked ROCK and the computer picked PAPER = ROCK [versus_paper] = loss
    Hence, we know that the user has lost. Because paper covers rock.
  

*/

/* Indexes of outcomes */
const versus_rock = 0;
const versus_paper = 1;
const versus_scissors = 2;
const versus_lizzard = 3;
const versus_spock = 4;
const owner_index = 5;

/* Possiple outcomes */
const win = "win";
const loss = "loss";
const draw = "draw";

/* 
    The content of the PAPER figure with possible outcomes at the oposing figure index 
    owner_index = the own index of the figure, that will be used to determine the outcome.
*/
const ROCK = [];
ROCK[versus_rock] = draw;
ROCK[versus_paper] = loss;
ROCK[versus_scissors] = win;
ROCK[versus_lizzard] = win;
ROCK[versus_spock] = loss;
ROCK[owner_index] = versus_rock;


/* The content of the PAPER figure with possible outcomes at the oposing figure index */
const PAPER = [];
PAPER[versus_rock] = win;
PAPER[versus_paper] = draw;
PAPER[versus_scissors] = loss;
PAPER[versus_lizzard] = loss;
PAPER[versus_spock] = win;
PAPER[owner_index] = versus_paper;


const SCISSORS = [];
SCISSORS[versus_rock] = loss;
SCISSORS[versus_paper] = win;
SCISSORS[versus_scissors] = draw;
SCISSORS[versus_lizzard] = win;
SCISSORS[versus_spock] = loss;
SCISSORS[owner_index] = versus_scissors;

const LIZZARD = [];
LIZZARD[versus_rock] = loss;
LIZZARD[versus_paper] = win;
LIZZARD[versus_scissors] = loss;
LIZZARD[versus_lizzard] = draw;
LIZZARD[versus_spock] = win;
LIZZARD[owner_index] = versus_lizzard;

const SPOCK = [];
SPOCK[versus_rock] = win;
SPOCK[versus_paper] = loss;
SPOCK[versus_scissors] = win;
SPOCK[versus_lizzard] = loss;
SPOCK[versus_spock] = draw;
SPOCK[owner_index] = versus_spock;

class Game {

    constructor(numberOfAttempts)) {
        this.attempsLeft = numberOfAttempts;
        this.computerPlayer = new Player();
        this.userPlayer = new Player();
        
    }
}

class GameProcessor {
    constructor() {
        // TODO: Put code here
    }

    /* 
        PURPOSE: 
        The method must be called  when the user picks one of the five options.
        It determines which player of the two is the winner of the round.

        PARAMETERS: 
        user must be an instance of Player 
        computer must be an instance of Player

        RETURN VALUE:
        The result is a string representation that shows if the USER wins or loses or ir it's a draw.
        NOTE: The result is shown from the perpective of the user. If it says win, that means that the user wins.
    */
    playersMoveIs(user, computer){
        let outcome = "none";
        // ensure that both parameters are of the appropriate type
        if(user instanceof Player && computer instanceof Player){
            outcome = user.currentPick[computer.currentPick[owner_index]];
        }

        return outcome;
    }
}

class Player {
    constructor() {
        this.score = 0;
        this.pick = null;
    }
    set currentScore(score) {
        this.score = score;
    }

    get currentScore() {
        return this.score;
    }

    set currentPick(pick) {
        this.pick = pick;
    }

    get currentPick() {
        return this.pick;
    }

    pickRandom() {
        // Assigns a random integer from 0 to 4:
        let number = Math.floor(Math.random() * 5);
        switch (number) {
            case 0:
                this.pick = ROCK;
                break;
            case 1:
                this.pick = PAPER;
                break;
            case 2:
                this.pick = SCISSORS;
                break;
            case 3:
                this.pick = LIZZARD;
                break;
            case 4:
                this.pick = SPOCK;
                break;
            default:
                this.pick = SPOCK;
        }
    }

}
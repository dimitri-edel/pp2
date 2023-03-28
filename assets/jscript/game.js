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
    | versus_lizard             | win                                     |  Rock crushes lizzard
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
    | versus_lizard             | loss                                    |  Lizzard eats paper
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
const versus_lizard = 3;
const versus_spock = 4;
const owner_index = 5;

/* Possiple outcomes */
const win = "win";
const loss = "loss";
const draw = "draw";

/* List of messages that explain the outcome by naming the corresponding rule */
const rock_versus_rock = "Computer also picked rock!";
const rock_versus_paper = "Paper covers rock!";
const rock_versus_scissors = "Rock crushes scissors!";
const rock_versus_lizard = "Rock crushes lizard!";
const rock_versus_spock = "Spock vaporized rock!";

const paper_versus_paper = "Computer also picked rock!";
const paper_versus_rock = "Paper covers rock!";
const paper_versus_scissors = "Scissors cuts paper!";
const paper_versus_lizard = "Lizard eats paper!";
const paper_versus_spock = "Paper disproves spock!";

const scissors_versus_scissors = "Computer also picked scissors!";
const scissors_vesus_rock = "Rock crushes scissors!";
const scissors_versus_paper = "Scissors cuts paper!";
const scissors_versus_lizard = "Scissors decapitates lizard!";
const scissors_versus_spock = "Spock smashes scissors!";

const lizard_versus_lizard = "Computer also picked lizard!";
const lizard_versus_rock = "Rock crushes lizard!";
const lizard_versus_paper = "Lizard eats paper!";
const lizard_versus_scissors = "Scissors decapitates lizard!";
const lizard_versus_spock = "Lizard poisons spock!";

const spock_versus_spock = "Computer also picked spock!";
const spock_versus_rock = "Spock vaporized rock!";
const spock_versus_paper = "Paper disproves spock!";
const spock_versus_scissors = "Spock smashes scissors!";
const spock_versus_lizard = "Lizard poisons spock!";

const outcome_index = 0;
const message_index = 1;

/* 
    The content of the ROCK, PAPER, SCISSORS, LIZARD and SPOCK arrays  contain possible outcomes at the corresponding index. 
    owner_index = the own index of the figure, that will be used to determine the outcome.

    The arrays below : ROCK, PAPER, SCISSORS, LIZARD and SPOCK are two-dimensional arrays.
    The last dimension contains two values. One is the outcome(win, loss, draw). The other 
    is the corresponding message, that explains the outcome. See constants above.

    EXAMPLE:
    ROCK[versus_spock][outcome_index] is "win"
    ROCK[versus_spock][message_index] is "Spock vaporizes rock!"
*/
const ROCK = new Array(6);
// Make it a two-dimensional array
for (var i = 0; i < ROCK.length; i++) {
    // Add an array with two possible entries at the index
    ROCK[i] = new Array(2);
}
ROCK[versus_rock][outcome_index] = draw;
ROCK[versus_rock][message_index] = rock_versus_rock;
ROCK[versus_paper][outcome_index] = loss;
ROCK[versus_paper][message_index] = rock_versus_paper;
ROCK[versus_scissors][outcome_index] = win;
ROCK[versus_scissors][message_index] = rock_versus_scissors;
ROCK[versus_lizard][outcome_index] = win;
ROCK[versus_lizard][message_index] = rock_versus_lizard;
ROCK[versus_spock][outcome_index] = loss;
ROCK[versus_spock][message_index] = rock_versus_spock;
ROCK[owner_index][outcome_index] = versus_rock;


/* The content of the PAPER figure with possible outcomes at the oposing figure index */
const PAPER = new Array(6);
// Make it a two-dimensional array
for (var i = 0; i < PAPER.length; i++) {
    // Add an array with two possible entries at the index
    PAPER[i] = new Array(2);
}
PAPER[versus_rock][outcome_index] = win;
PAPER[versus_rock][message_index] = paper_versus_rock;
PAPER[versus_paper][outcome_index] = draw;
PAPER[versus_paper][message_index] = paper_versus_paper;
PAPER[versus_scissors][outcome_index] = loss;
PAPER[versus_scissors][message_index] = paper_versus_scissors;
PAPER[versus_lizard][outcome_index] = loss;
PAPER[versus_lizard][message_index] = paper_versus_lizard;
PAPER[versus_spock][outcome_index] = win;
PAPER[versus_spock][message_index] = paper_versus_spock;
PAPER[owner_index][outcome_index] = versus_paper;


const SCISSORS = new Array(6);
// Make it a two-dimensional array
for (var i = 0; i < SCISSORS.length; i++) {
    // Add an array with two possible entries at the index
    SCISSORS[i] = new Array(2);
}
SCISSORS[versus_rock][outcome_index] = loss;
SCISSORS[versus_rock][message_index] = scissors_vesus_rock;
SCISSORS[versus_paper][outcome_index] = win;
SCISSORS[versus_paper][message_index] = scissors_versus_paper;
SCISSORS[versus_scissors][outcome_index] = draw;
SCISSORS[versus_scissors][message_index] = scissors_versus_scissors;
SCISSORS[versus_lizard][outcome_index] = win;
SCISSORS[versus_lizard][message_index] = scissors_versus_lizard;
SCISSORS[versus_spock][outcome_index] = loss;
SCISSORS[versus_spock][message_index] = scissors_versus_spock;
SCISSORS[owner_index][outcome_index] = versus_scissors;

const LIZARD = new Array(6);
// Make it a two-dimensional array
for (var i = 0; i < LIZARD.length; i++) {
    // Add an array with two possible entries at the index
    LIZARD[i] = new Array(2);
}
LIZARD[versus_rock][outcome_index] = loss;
LIZARD[versus_rock][message_index] = lizard_versus_rock;
LIZARD[versus_paper][outcome_index] = win;
LIZARD[versus_paper][message_index] = lizard_versus_paper;
LIZARD[versus_scissors][outcome_index] = loss;
LIZARD[versus_scissors][message_index] = lizard_versus_scissors;
LIZARD[versus_lizard][outcome_index] = draw;
LIZARD[versus_lizard][message_index] = lizard_versus_lizard;
LIZARD[versus_spock][outcome_index] = win;
LIZARD[versus_spock][message_index] = lizard_versus_spock;
LIZARD[owner_index][outcome_index] = versus_lizard;

const SPOCK = new Array(6);
// Make it a two-dimensional array
for (var i = 0; i < SPOCK.length; i++) {
    // Add an array with two possible entries at the index
    SPOCK[i] = new Array(2);
}
SPOCK[versus_rock][outcome_index] = win;
SPOCK[versus_rock][message_index] = spock_versus_rock;
SPOCK[versus_paper][outcome_index] = loss;
SPOCK[versus_paper][message_index] = spock_versus_paper;
SPOCK[versus_scissors][outcome_index] = win;
SPOCK[versus_scissors][message_index] = spock_versus_scissors;
SPOCK[versus_lizard][outcome_index] = loss;
SPOCK[versus_lizard][message_index] = spock_versus_lizard;
SPOCK[versus_spock][outcome_index] = draw;
SPOCK[versus_spock][message_index] = spock_versus_spock;
SPOCK[owner_index][outcome_index] = versus_spock;

// The following messages will be displayed at the top of the page. These are motivational phrases.
const starting_message = "Welcome! May the force be with you!";
const winning_message = "You are winning! Keep going!";
const losing_message = "Do not give up! Luck never gives; it only lends.";
const tie_message = "The game is tied. You can still win!";
const win_message = "Congratulations! You did awsome! The force was on your side!";
const loss_message = "Sorry! You have lost. Better luck next time!";
const draw_message = "Not bad! Not bad, at all!";

class Pick {
    constructor(owner_index, name) {
        this.index = owner_index;
        this.name = name;
        this.imageFileName = "question.png";
    }
}

class Rock extends Pick {
    constructor() {
        super(versus_rock, "Rock");
        super.imageFileName = "rock.webp";
    }
    // Checks the outcome of playing it against Paper, Scissorrs, etc.
    // If Rock wins the return value is "win" else "loss" or "draw"
    checkOutcomeAgainst(oponentsPick) {
        return ROCK[oponentsPick.index][outcome_index];
    }
    /* Returns the corresponding message, which explains the outcome, like "lirrad eats paper!" */
    checkOutcomeMessageAgainst(oponentsPick) {
        return ROCK[oponentsPick.index][message_index];
    }
}

class Paper extends Pick {
    constructor() {
        super(versus_paper, "Paper");
        super.imageFileName = "paper.webp";
    }
    /* Checks the outcome against what the oponent's Pick */
    checkOutcomeAgainst(oponentsPick) {
        return PAPER[oponentsPick.index][outcome_index];
    }
    /* Returns the corresponding message, which explains the outcome, like "lirrad eats paper!" */
    checkOutcomeMessageAgainst(oponentsPick) {
        return PAPER[oponentsPick.index][message_index];
    }
}

class Scissors extends Pick {
    constructor() {
        super(versus_scissors, "Scissors");
        super.imageFileName = "scissors.webp";
    }
    /* Checks the outcome against what the oponent's Pick */
    checkOutcomeAgainst(oponentsPick) {
        return SCISSORS[oponentsPick.index][outcome_index];
    }
    /* Returns the corresponding message, which explains the outcome, like "lirrad eats paper!" */
    checkOutcomeMessageAgainst(oponentsPick) {
        return SCISSORS[oponentsPick.index][message_index];
    }
}

class Lizard extends Pick {
    constructor() {
        super(versus_lizard, "Lizard");
        super.imageFileName = "lizard.webp";
    }

    /* Checks the outcome against what the oponent's Pick */
    checkOutcomeAgainst(oponentsPick) {
        return LIZARD[oponentsPick.index][outcome_index];
    }

    /* Returns the corresponding message, which explains the outcome, like "lirrad eats paper!" */
    checkOutcomeMessageAgainst(oponentsPick) {
        return LIZARD[oponentsPick.index][message_index];
    }
}

class Spock extends Pick {
    constructor() {
        super(versus_spock, "Spock");
        super.imageFileName = "spock.webp";
    }
    /* Checks the outcome against what the oponent's Pick */
    checkOutcomeAgainst(oponentsPick) {
        return SPOCK[oponentsPick.index][outcome_index];
    }
    /* Returns the corresponding message, which explains the outcome, like "lirrad eats paper!" */
    checkOutcomeMessageAgainst(oponentsPick) {
        return SPOCK[oponentsPick.index][message_index];
    }

}


class Game {

    constructor(numberOfRounds) {
        this.numberOfRoundsSetting = numberOfRounds;
        this.roundsLeft = numberOfRounds;
        this.currentRound = 0;
        this.computerPlayer = new Player();
        this.userPlayer = new Player();        
    }

    userMakesMove(pick) {
        let result = "";
        let result_message = "";
        this.userPlayer.currentPick = pick;
        this.computerPlayer.pickRandom();        


        // Check the outcome of the move made by the player
        result = this.userPlayer.currentPick.checkOutcomeAgainst(this.computerPlayer.currentPick);
        // The corresponding message that explains the outcome
        result_message = this.userPlayer.currentPick.checkOutcomeMessageAgainst(this.computerPlayer.currentPick);

        // Asign score
        if (result == win) {
            this.userPlayer.increaseScore();
        } else if (result == loss) {
            this.computerPlayer.increaseScore();
        } else if (result == draw) {
            this.userPlayer.increaseScore();
            this.computerPlayer.increaseScore();
        }
        // Transfer the score to the scoreboard
        view.updateScore(this.userPlayer, this.computerPlayer);
        // Count down the rounds
        this.roundsLeft--;
        this.currentRound++;
        // Show the result of the last move to the player
        view.displayOutComeResults(result, result_message, this.userPlayer, this.computerPlayer);
    }

    // Set number of rounds before game over
    setNumberOfRounds(number) {
        // If not a number set to default
        if(isNaN(number)){
            number = 5;
        }
        this.numberOfRoundsSetting = number;
        this.roundsLeft = number;
    }

    startOver() {
        this.roundsLeft = this.numberOfRoundsSetting;
        this.computerPlayer.currentScore = 0;
        this.userPlayer.currentScore = 0;
        this.currentRound = 0;

        // view.displayStartWindow(this.userPlayer, this.computerPlayer);
        view.updateScore(this.userPlayer, this.computerPlayer);
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

    increaseScore() {
        this.score++;
    }

    // Pick a ramdom move for the player. Used for the computer player.
    pickRandom() {
        // Assigns a random integer from 0 to 4:
        let number = Math.floor(Math.random() * 5);
        switch (number) {
            case 0:
                this.pick = new Rock();
                break;
            case 1:
                this.pick = new Paper();
                break;
            case 2:
                this.pick = new Scissors();
                break;
            case 3:
                this.pick = new Lizard();
                break;
            case 4:
                this.pick = new Spock();
                break;
            default:
                this.pick = new Pick(7, "none");
        }
    }

}
/*
    PURPOSE:
    Separate the game logic from the presentation logic.
*/
class View {
    constructor() {
        // IDs of images whose setting need to be restored after every round
        this.restoreComputerImageId = null;
        this.restoreUserImageId = null;
        // Copy of the HTML code of the settings-panel, so it can be reset later on
        this.initialSettingsHTML = "<label for='number-of-attempts-setting'>Number of possible attempts:</label><input id='number-of-attempts-setting' type='text'>";

        // List of optionPickerIds
        this.optionPickerIds = ["user-rock-button", "user-paper-button",
            "user-scissors-button", "user-lizard-button",
            "user-spock-button", "computer-rock-button",
            "computer-paper-button", "computer-scissors-button",
            "computer-lizard-button", "computer-spock-button"
        ];

        this.hookUpOptionPickerEventListeners();
    }

    displayOutComeResults(outcome, outcome_message, user, computer) {

        let messageText = "";        
        this.restoreComputerImageId = "";
        this.restoreUserImageId = "";
        switch (outcome) {
            case win:
                messageText = "YOU WIN!";                
                break;
            case loss:
                messageText = "YOU LOSE!";                
                break;
            case draw:
                messageText = "DRAW!";
                break;
            default:
                break;
        }

        document.getElementById("outcome-text").innerHTML = messageText;
        document.getElementById("user-pick-image").src = "./assets/images/webp/"+game.userPlayer.currentPick.imageFileName;
        document.getElementById("computer-pick-image").src = "./assets/images/webp/"+game.computerPlayer.currentPick.imageFileName;
        document.getElementById("message-text").innerHTML = outcome_message;
        document.getElementById("settings-panel").style = "display:none;";
        document.getElementById("rounds-counter-panel").style = "display:block;";
        document.getElementById("rounds-counter").innerHTML = game.currentRound;
       
        if(game.roundsLeft > 0) {
            if(game.userPlayer.score > game.computerPlayer.score){
                document.getElementById("message-display").innerHTML = winning_message;
            }else if(game.userPlayer.score < game.computerPlayer.score){
                document.getElementById("message-display").innerHTML = losing_message;
            }else {
                document.getElementById("message-display").innerHTML = tie_message;
            }
        }

        if (game.roundsLeft <= 0) {
            this.displayGameOver();
        }
    }

    displayGameOver() {
        document.getElementById("outcome-text").innerHTML = "GAME OVER!";
        let messageText = "";
        if(game.computerPlayer.score > game.userPlayer.score){
            messageText = "You have lost this game!";
            document.getElementById("message-display").innerHTML = loss_message;
        }else if(game.computerPlayer.score < game.userPlayer.score){
            messageText = "You have won this game!";
            document.getElementById("message-display").innerHTML = win_message;
        }else {
            messageText = "This game came up a draw!";
            document.getElementById("message-display").innerHTML = draw_message;
        }
        document.getElementById("message-text").innerHTML = messageText;
        this.clearOptionPickerEventListeners();
    }

    startOverOnClick() {
        game.startOver();
        this.hookUpOptionPickerEventListeners();
        document.getElementById("message-display").innerHTML = starting_message;
        document.getElementById("outcome-text").innerHTML = "GO!";
        document.getElementById("message-text").innerHTML = "Starting a new Game!";
        document.getElementById("user-pick-image").src = "./assets/images/webp/question.webp";
        document.getElementById("computer-pick-image").src = "./assets/images/webp/question.webp";
        document.getElementById("settings-panel").style = "display:block;";
        document.getElementById("rounds-counter-panel").style = "display:none;";
    }

    displayStartWindow(user, computer) {
        // this.clear();
        // this.clearOptionPickerEventListeners();
        // this.updateScore(user, computer);
        // document.getElementById("message-panel").innerHTML = "<button id=\"begin-button\" onclick=\"view.beginOnClick();\">Begin</button>";
        // document.getElementById("settings-panel").innerHTML = this.initialSettingsHTML;
        // this.setNumberOfRoundsSetting(game.numberOfRoundsSetting);
    }

    clear() {
        for (let i = 0; i < this.optionPickerIds.length; i++) {
            document.getElementById(this.optionPickerIds[i]).className = "player-option-picker";
        }
        this.hookUpOptionPickerEventListeners();
    }

    clearOptionPickerEventListeners() {
        const userOptionPickerIds = ["user-rock-button", "user-paper-button",
            "user-scissors-button", "user-lizard-button",
            "user-spock-button"
        ];
        // TODO: Create real functions for the event listener
        document.getElementById(userOptionPickerIds[0]).removeEventListener("click", this.userRockOptionPickerOnClick);

        document.getElementById(userOptionPickerIds[1]).removeEventListener("click", this.userPaperOptionPickerOnClick);

        document.getElementById(userOptionPickerIds[2]).removeEventListener("click", this.userScissorsOptionPickerOnClick);

        document.getElementById(userOptionPickerIds[3]).removeEventListener("click", this.userLizzardOptionPickerOnClick);

        document.getElementById(userOptionPickerIds[4]).removeEventListener("click", this.userSpockOptionPickerOnClick);
    }

    hookUpOptionPickerEventListeners() {
        const userOptionPickerIds = ["user-rock-button", "user-paper-button",
            "user-scissors-button", "user-lizard-button",
            "user-spock-button"
        ];
        // TODO: Create real functions for the event listener
        document.getElementById(userOptionPickerIds[0]).addEventListener("click", this.userRockOptionPickerOnClick);

        document.getElementById(userOptionPickerIds[1]).addEventListener("click", this.userPaperOptionPickerOnClick);

        document.getElementById(userOptionPickerIds[2]).addEventListener("click", this.userScissorsOptionPickerOnClick);

        document.getElementById(userOptionPickerIds[3]).addEventListener("click", this.userLizzardOptionPickerOnClick);

        document.getElementById(userOptionPickerIds[4]).addEventListener("click", this.userSpockOptionPickerOnClick);
    }

    /* EventListners */
    userRockOptionPickerOnClick() {
        game.userMakesMove(new Rock());
    }

    userPaperOptionPickerOnClick() {
        game.userMakesMove(new Paper());
    }

    userScissorsOptionPickerOnClick() {
        game.userMakesMove(new Scissors());
    }

    userLizzardOptionPickerOnClick() {
        game.userMakesMove(new Lizard());
    }

    userSpockOptionPickerOnClick() {
        game.userMakesMove(new Spock());
    }

    beginOnClick() {

        //  The message-panel
        let messagePanel = document.getElementById("message-panel");
        // The settings-panel
        let settingsPanel = document.getElementById("settings-panel");
        // THe HTML content of settings-panel, whose intial content has been preserved in the constructor
        let settingsHTML = this.initialSettingsHTML;
        // Read from the settings field. 
        game.setNumberOfRounds(this.getNumberOfRoundsSetting());
        this.hookUpOptionPickerEventListeners();
        messagePanel.innerHTML = "GO !!!";
        settingsHTML += "<button onclick='view.endGameOnClick()'>End the Game</button>";
        settingsPanel.innerHTML = settingsHTML;
    }

    updateScore(user, computer) {
        let user_tag = document.getElementById("user-score");
        let computer_tag = document.getElementById("computer-score");

        // set colors to the numbers red for loss, green for win
        if (user.score > computer.score) {
            user_tag.style = "color: green;";
            computer_tag.style = "color: red;";
        } else if (user.score < computer.score) {
            user_tag.style = "color: red;";
            computer_tag.style = "color: green;";
        } else {
            user_tag.style = "color: green;";
            computer_tag.style = "color: green;";
        }
        // update the score numbers
        computer_tag.innerHTML = game.computerPlayer.score;
        user_tag.innerHTML = game.userPlayer.score;
    }

    getNumberOfRoundsSetting() {
        let val = document.getElementById("number-of-attempts-setting").value;
        // If not a number set to default
        if (isNaN(val)) {
            val = 5;
        }

        return val;
    }

    setNumberOfRoundsSetting(set_value) {
        // If not a number set to default
        if (isNaN(set_value)) {
            set_value = 5;
        }
       document.getElementById("number-of-attempts-setting").value = set_value;
    }    
}

// Initialize global objects
let game = new Game(3);
let view = new View();
document.getElementById("message-display").innerHTML = starting_message;
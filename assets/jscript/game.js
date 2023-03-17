/* 
    The user and computer can make a move. 
    A move uses one of the figures : rock, paper, scissors, lizzard or spock.
    The both moves will be compared from the user's perspective.

    Let's say user picked rock and the computer picked paper. Paper covers rock. So paper wins over rock:
    +---------------------------+-----------------------------------------+
    |  ROCK FIGURE                                                        |
    +---------------------------+-----------------------------------------+
    | OPOSING INDEX             |  OUTCOME                                |
    +---------------------------+-----------------------------------------+
    | rock_index                | draw                                    |  Since rock against rock is a draw
    +---------------------------+-----------------------------------------+
    | paper_index               | loss                                    |  Because paper covers rock
    +---------------------------+-----------------------------------------+
    | scissors_index            | win                                     |  Rock crushes scissors
    +---------------------------+-----------------------------------------+
    | lizzard_index             | win                                     |  Rock crushes lizzard
    +---------------------------+-----------------------------------------+
    | spock_index               | loss                                    |  Spock vaporizes rock
    +---------------------------+-----------------------------------------+

    +---------------------------+-----------------------------------------+
    |  PAPER FIGURE                                                       |
    +---------------------------+-----------------------------------------+
    | OPOSING INDEX             |  OUTCOME                                |
    +---------------------------+-----------------------------------------+
    | rock_index                | win                                     |  Paper covers rock
    +---------------------------+-----------------------------------------+
    | paper_index               | draw                                    |  Paper on paper
    +---------------------------+-----------------------------------------+
    | scissors_index            | loss                                    |  scissors cuts paper
    +---------------------------+-----------------------------------------+
    | lizzard_index             | loss                                    |  Lizzard eats paper
    +---------------------------+-----------------------------------------+
    | spock_index               | win                                     |  Paper disproves Spock
    +---------------------------+-----------------------------------------+

    we just asign the outcome of every possible oposing move in a table (array).
    Then we can cross-referrence the outcome by using the index of the oposing move.

    User picked ROCK_FIGURE and the computer picked PAPER_FIGURE = ROCK_FIGURE[paper_index] = loss
    Hence, we know that the user has lost. Because paper covers rock.
  

*/

/* Indexes of the weights in an array representing the figure */
const rock_index = 0;
const paper_index = 1;
const scissors_index = 2;
const lizzard_index = 3;
const spock_index = 4;

/* Possiple outcomes */
const win = 1;
const loss = 1;
const draw = 0;




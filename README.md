![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)


# Rock, Paper, Scissors, Lizard, Spock
## Preparation
I began with implementing the game logic using JavaScript. Then proceeded to designing the view elements.
 
### ISSUES
#### PRESENTATION DESIGN
The **first design** was **not user friendly** and the mentor did not aprove. He said it was 'not nice', even thourgh I am sure he had a very different word in mind. Here is a picture of how it looked at first
![Image of first design](./assets/images/documentation/first_design.jpg)

So I changed it to the one you will see below. This one the mentor loved. And not only was it more user friendly but also more developer friendly.

#### MEDIA RESPONSIVE DESIGN
I have tried to cover all the devices that Chrome's dev tools had to offer. Since I am on the fast track schedule there simply was not enough time to cover them all **perfectly**. So I implemented a few generic queries that cover a range of devices. The method is to divy up the devices into groups of simple dimensions. Then simply use the group's minimum required width and the minimum required height for dimensions. A few devices that have a width of less than 320 pixels have not been covered.

### GOAL
The basic idea is to build a Rock, Paper, Scissors, Lizard, Spock Game
#### External user’s goal
The site’s users want to play an online game that has elements of chance.
#### Site owner's goal:
The site’s goal is to provide a challenging game with increasing levels of difficulty to entertain online users.
#### Potential features to include:
- Pattern matching functionality
- A limited number of tries before the game is over
- A score tracking system
- The ability to play against the computer
### IMAGES
I downloaded the restart icon from freeiconspng.com and then used it as a template for the home button.
### LAYOUT

#### Home page

#### Game page

## Features

### NAVIGATION


Navigation bar structure
Name of page
- Home
- Game
### HOME PAGE
image
#### GAME PAGE
image

## Responsive Design
## Testing
### LIGHTHOUSE

#### home page
image
#### gmae page
image
### BUGS
#### JavaScipt
There was a typo, that was causing problems. I misspelled the word lizard. There was and still is an arry by the name 'LIZARD' and a class with the name 'Lizard'. However the name of the class was spelled incorrectly like so 'Lizzard'. One of the tag id's in html alos used the incorrect spelling. I used the debugger and the culprits were found out rather quickly. I rectified the spelling in the class name and the html-tag-id and it fixed everything.
### VALIDATOR TESTING
The pages have been tested by validator.w3.org and jigsaw.w3.org/css-validator and have passed the tests.
### JSHint 
The JavaScript has been tested in JSHint without any issues as long as it is set to esversion: 6. Otherwise, it will show some warnings because I use ECMAScript 6 features such as const and let instead of the var keyword. I use const for values that are constant, even though the keyword is used for 
declaring a variable. However, it is just my personal preference.
## Deployment
The site has been deployed from GitHub Pages. The way to do that was to go to the settings. Click on the Pages icon. Select the repository and the branch. And click on Publish. And that was that.
## Technologies
- GitHub
- GitPod
- Gimp wsa used to manipulate images
- Chhrome Developer Tools for testing and debugging

## Credits
### HTML & CSS Coding
- w3schools as a tutorial for more sophisticated HTML & CSS
- Code Institute tutorials for Basic HTML & CSS 
- YouTube : Ambient Light Effects | CSS 3D Glowing Cube Animation Effects
- YouTube : How to make a CSS 3D Cube Animation with HTML and CSS

### JavaScript Coding
- Code Institute tutorials for Basic JavaScript
- w3schools as a tutorial on OOD JavaScript
- Stackoverflow.com for some advanced tecchniques in JavaScript

### MEDIA
- restart icon - free icons png
- vector portal (image of spock)
- cliparting.com (image of rock)
- NicePNG (image of scissors)
- 123RF (image of lizard)
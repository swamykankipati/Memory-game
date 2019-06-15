# Memory Game Project

##Game Moto
This Game is  logical because of deck of cards and differnt icons and different time shuffle.
# [Game-Demo](https://swamykankipati.github.io/Front-End-Nano-Degree-memory-game/index.html)

## Table of Contents

index.html
css/app.css
img/geometry2.png
js/app.js
README.md

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

# Download form Project :

 clone or Download project from git repository  goto url (<https://github.com/udacity/fend-project-memory-game>)

## To play  Memory game what we should do :

      1. try to match all the cards.
      2. when you  click a card timer was start and after complication of game timer was end.
      3. when clicked second card  moves was counted like (1 move or 2 movies  or upto complication of game    obtain total      count of moves).
      4. if you match the all card with less moves like (10 moves) we will  get 3 star rating.
      5. if you match the all cards with 15 moves we will get 2 stars rating.
      6. if you match the all cards with 25 moves we will get 1 stars rating.
      7. if you match the all cards with  more than 25 moves and upto end of game, we will get 0 stars rating.
      8. if you replay again  refresh page or refresh arrow, and exist any time.
      9. all cards are matched we will get Sweetalert.
        Sweet alert consists of
         **  Congratulations Message ,
         ** Time [MM:SS],
         ** Star rating [0 or 1 or 2 or 3 star ] ,
         ** Update Moves[ moves in Number format].

## Going to code blocks:

       1. index.html file  i changed few modifications like meta data files  like  script tag , script tag consists of sweetalert,
          click event refresh the  game module, and added span tag  
        2. css file name as app.css changed few modifications like match card styles and disabled class added.
        3. Javascript file name as app.js  changed lot of  modifications like created variables and functions.
            ** javascript file modifications **
              1. Showcard() showcard function to display card.
              2. Matching() function  to match the cards.
              3. timer() to display time and how much time to completed game.
              4. timerStop() this function to stop the time(clearInterval).
              5. restart() this function used to refresh index.html page.
              6. shuffle () to shuffle all the cards.
              7. shuffle () is used  shuffle cards.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

# DOM manipulations

1.  DOM manipulations  is used to render the html elements in  JavaScript file.
#Sweetalert
- Sweetalert is replacement of popup window Message in  JavaScript.

### Sweetalert is a Liabrary
    included with the help of geting data from index.html file  
    [Sweetalert Liabrary](https://unpkg.com/sweetalert/dist/sweetalert.min.js)

## swal () is used alert the Message to display the user .

 we can get additional information to reffer the link shown below
 [Sweetalert](https://sweetalert.js.org/guides/)
## TO Play the Game 
[Demo Click Me](https://swamykankipati.github.io/Front-End-Nano-Degree-Project-2-Memory-game/)

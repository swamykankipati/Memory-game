'use strict';
// to created array  calling all class elements
const ts = ["fa fab fa-apple", "fa fab fa-apple", "fa fas fa-ban", "fa fas fa-ban",
  "fa far fa-bell", "fa far fa-bell", "fa fab fa-bluetooth-b", "fa fab fa-bluetooth-b",
  "fa fa-cube", "fa fa-cube", "fa fas fa-car", "fa fas fa-car", "fa fa-diamond", "fa fa-diamond", "fa far fa-envelope", "fa far fa-envelope"
]
shuffle(ts);
//  min is varible used to display timer of Minitues
let min = 0;
//  sec is varible used to display timer of Seconds
let sec = min * 60;
//  start is varible is used to when Click card game Was start otherwise Default is False
let start = false;
//  stars is used to display rating
let stars = 3;
//  card  is array is used to collection of elements
let card = [];
//  runs is varible is used to count the number of Moves
let runs = 0;
// docket is varible is used to call the className
const docket = document.querySelectorAll('.card');
// for loop is used to collection of cards
for (let i = 0; i < docket.length; i++) {
  docket[i].addEventListener('click', function() {
    showcard(this);

  });
};
// showcard function
function showcard(i) {
  if (!start) {
    start = true;
    timer();
  }
  i.classList.add("open", "show", "disabled");
  card.push(i)
  matching();

}
// card maching function

function matching() {
  if (card.length == 2) {
    runs = runs + 1;
    rate();


    const me = document.querySelector(".moves").innerHTML = runs;
    if (card[0].children[0].className == card[1].children[0].className) {
      card[0].classList.toggle('match');
      card[1].classList.toggle('match');
      card = [];
      congrats();


    } else {
      setTimeout(function() {
        card[0].classList.remove("open", "show", "disabled");

        card[1].classList.remove("open", "show", "disabled");
        card = [];
      }, 100)
    }

  }

}
// timer function start
let interval;

function timer() {
  interval = setInterval(function() {
    if (sec != 60) {
      sec = sec + 1;
      document.querySelector(".sec").innerHTML = sec + " " + "Sec";

    } else {

      min = min + 1;
      sec = 0;
      document.querySelector(".min").innerHTML = min + " " + "Min";

    }
  }, 1000)
}
// timerstop function
function timerStop() {
  clearInterval(interval);
}

// rating section start
function rate() {

  if (runs == 10) {
    stars = 2;
    // srate is if you play game star color was changed

    const srate = document.querySelector(".fa-star");
    srate.classList.remove("fa-star")
  } else if (runs == 18) {
    stars =1;
    const srate = document.querySelector(".fa-star");
    srate.classList.remove("fa-star")

  } else {
    // we dont have give any star for you

  }
}
// rating section closed
// page load restrt game
function restart() {
  location.reload();

}
// page load restrt game closed


function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  // to geting the className deck with help of DOM manipulations box is variablename
  const box = document.querySelector('.deck');
  for (let i = 0; i < ts.length; i++) {
    // picklist  is used getting the li elements
    const picklist = document.createElement('li');
    picklist.classList.add('card');
    box.appendChild(picklist);
    // picki used to get the i elements
    const picki = document.createElement('i');
    picki.className = array[i];
    picklist.appendChild(picki);


  }
  return array;

}
// mv getting the  moves
const mv = document.querySelector('.moves')

const timeer = document.querySelector('.timer')
const machcard = document.getElementsByClassName('match')

function congrats() {

  if (machcard.length == 16) {
    timerStop();
    //  congts is varible assign the value of span
    const congts = document.createElement("span");
    congts.innerHTML = " Star rating:-) " + stars + "🌟Rating" + "<br>" + " Moves-:) " + runs + "Moves" + timeer.innerHTML;
    swal({

        title: "Congralations! 🎉👍✔",
        content: congts,
        text: "Awesome you're a Champ ✔👌",
        icon: "success",
        button: "Play-Again"

      })
      .then(
        forword => {
          if (forword) {
            location.reload();
          }
        });
  }
}

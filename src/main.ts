/**
 * SimpleKit Example Project
 *
 * uses a Drawable Square
 * sets event handler with "switch" dispatch
 * sets draw handler
 * starts SimpleKit
 */

import {
  SKEvent,
  SKKeyboardEvent,
  SKMouseEvent,
  SKResizeEvent,
  setSKDrawCallback,
  setSKEventListener,
  startSimpleKit,
} from "simplekit/canvas-mode";
// local import
import { Drawable } from "./drawable";
import { Cat } from "./cat";
import { Star } from "./star";
import { Bulleseye } from "./bullseye";
import { Card } from "./card";
import { Title } from "./title";

let pairs = 1;
let displayTitle = new Title(pairs, false);
let width = innerWidth;
let height = innerHeight;
let winMode = false;
let display = true;
let playmode = false;
let facesArray: Drawable[] = []; //Holds all drawable faces to be iterated through
let CardArray: Card[] = []; //Array of Cards for game
let faces: Drawable[] = []; // Stores types of faces that can be drawn
let checkPairs: Card[] = [];
let pairsLeft = pairs;

//Shuffles elements of thge array
function shuffle(array: Drawable[]): Drawable[] {
  for (let i = 0; i < array.length; i++) {
    let ele;
    ele = array[i];
    let randomVal = Math.floor(Math.random() * array.length);
    array[i] = array[randomVal];
    array[randomVal] = ele;
  }
  return array;
}
//Initializes the faces of the cards
function cardFacesArray() {
  //let facesArray = [];
  const cat1 = new Cat(40, 45, "red", 1, 0.75);
  const cat2 = new Cat(40, 45, "blue", 2, 0.75);
  const cat3 = new Cat(40, 45, "steel", 3, 0.75);
  const cat4 = new Cat(40, 45, "yellow", 4, 0.75);
  const cat5 = new Cat(40, 45, "grey", 5, 0.75);
  faces.push(cat1);
  faces.push(cat2);
  faces.push(cat3);
  faces.push(cat4);
  faces.push(cat5);
  const be1 = new Bulleseye(40, 40, "red", 3, 6, 0.75);
  const be2 = new Bulleseye(40, 40, "green", 3, 7, 0.75);
  const be3 = new Bulleseye(40, 40, "orange", 4, 8, 0.75);
  const be4 = new Bulleseye(40, 40, "black", 4, 9, 0.75);
  const be5 = new Bulleseye(40, 40, "red", 5, 10, 0.75);
  faces.push(be1);
  faces.push(be2);
  faces.push(be3);
  faces.push(be4);
  faces.push(be5);
  const star1 = new Star(10, 40, 4, 11);
  const star2 = new Star(20, 35, 5, 12);
  const star3 = new Star(10, 20, 6, 13);
  const star4 = new Star(10, 15, 7, 14);
  const star5 = new Star(10, 35, 10, 15, 0.9);
  faces.push(star1);
  faces.push(star2);
  faces.push(star3);
  faces.push(star4);
  faces.push(star5);
  faces = shuffle(faces);
  facesArray.push(faces[0]);
  facesArray.push(faces[0]);
  faces.shift();
}

function triggerWin() {
  winMode = true;
  CardArray.forEach((s) => {
    if (s instanceof Card) {
      s.matched = false;
    }
  });
  displayTitle = new Title(pairs, winMode);
}

function MoreCards() {
  if (pairs < 15) {
    if (faces.length >= 1) {
      facesArray.push(faces[0]);
      facesArray.push(faces[0]);
      faces.shift();
    }
  }
}
function LessCards() {
  if (pairs > 1) {
    if (facesArray.length > 2) {
      faces.push(facesArray[facesArray.length - 1]);
      facesArray.pop();
      facesArray.pop();
    }
  }
}
function clearCheckPairs(id: number) {
  CardArray.forEach((s) => {
    if (s instanceof Card) {
      console.log("id clear", id);
      if (id == s.id) {
        s.matched = true;
        //s.show = true;
      }
    }
  });
  checkPairs = [];
}
function addToCheckPairs(x: Card) {
  console.log("length", checkPairs.length);
  if (checkPairs.length < 2) {
    checkPairs.push(x);
  }
  if (checkPairs.length == 2) {
    if (matching()) {
      clearCheckPairs(x.id);
      pairsLeft--;
      console.log(pairsLeft);
      if (pairsLeft == 0) {
        triggerWin();
      }
    }
  }
}
function matching(): boolean {
  if (checkPairs.length == 2) {
    console.log("id1: ", checkPairs[0].id);
    console.log("id2: ", checkPairs[1].id);
    if (checkPairs[0].id == checkPairs[1].id) {
      console.log("Match Found");
      return true;
    }
  }
  return false;
}

//Setting new CardArray so that drawign can be updated from state change
function setCards(
  width: number,
  height: number,
  pairs: number,
  display: boolean
) {
  let newArray = [];
  let cards = pairs * 2;
  let cardsRemaining = cards;
  let marCanvas = width - 10; //Accounts for canvas so that there is 5px margin on each side

  let counter = 1;
  let whichRow = 0; //Keeps Track of which row cards are displayed on
  let fitCardW = Math.min(Math.floor(marCanvas / 90), cardsRemaining + 1); //How many cards can fit on one row
  let rows = Math.ceil(cards / marCanvas / 90) + 1;
  let centerHorizontal = marCanvas / 2 - 40; //Center of margined canvas

  for (let i = 0; i < cards; i++) {
    let start = centerHorizontal - (fitCardW * 90) / 2 + 90 * counter; //Starting position
    counter++;
    let card = new Card(
      start,
      height + 90 * whichRow - 40,
      facesArray[i],
      display,
      false,
      facesArray[i].id
    );
    newArray.push(card);
    if (counter == fitCardW) {
      counter = 1;
      whichRow++;
      cardsRemaining -= fitCardW;
    }
  }
  CardArray = newArray;
}

function drawCards(gc: CanvasRenderingContext2D) {
  CardArray.forEach((e) => {
    e.draw(gc);
  });
}
// mouse position
let mx = 0;
let my = 0;

// event handler with switch statement dispatch
function handleEvent(e: SKEvent) {
  switch (e.type) {
    case "mousemove":
      ({ x: mx, y: my } = e as SKMouseEvent);
      CardArray.forEach((s) => {
        if (s instanceof Card) {
          if (s.hitTest(mx, my) && playmode && !s.matched && !winMode) {
            s.isHighlighted = true;
          } else {
            s.isHighlighted = false;
          }
        }
      });
      break;
    case "click":
      ({ x: mx, y: my } = e as SKMouseEvent);
      CardArray.forEach((s) => {
        if (s instanceof Card) {
          if (s.hitTest(mx, my) && !winMode && playmode && !s.matched) {
            if (checkPairs.length < 2) {
              if (checkPairs.length == 0) {
                addToCheckPairs(s);
                s.show = true;
              } else {
                if (checkPairs[0].hitTest(mx, my)) {
                  s.show = !s.show;
                  checkPairs = [];
                } else {
                  addToCheckPairs(s);
                  s.show = true;
                }
              }
            } else if (checkPairs.length == 2) {
              if (checkPairs[0].hitTest(mx, my)) {
                s.show = !s.show;
                checkPairs.shift();
              } else if (checkPairs[1].hitTest(mx, my)) {
                s.show = !s.show;
                checkPairs.pop();
              }
            }
          }
        }
      });
      break;
    case "keyup":
      const { key } = e as SKKeyboardEvent;
      if (key == " ") {
        if (winMode) {
          if (pairs < 15) {
            MoreCards();
            pairs++;
            pairsLeft = pairs;
            console.log("Pairs left", pairsLeft);
          }
          winMode = false;
        }
        playmode = true;
        display = false;
        facesArray = shuffle(facesArray);
        setCards(width, height / 2, pairs, display);
      } else if (key == "+") {
        if (pairs < 15) {
          MoreCards();
          pairs++;
          pairsLeft++;
          displayTitle = new Title(pairs, winMode);
          setCards(width, height / 2, pairs, display);
        }
      } else if (key == "-") {
        if (pairs > 1) {
          LessCards();
          pairs--;
          pairsLeft--;
          displayTitle = new Title(pairs, winMode);
          setCards(width, height / 2, pairs, display);
        }
      } else if (key == "q") {
        display = true;
        playmode = false;
        setCards(width, height / 2, pairs, display);
      }
      break;
    case "resize":
      const re = e as SKResizeEvent;
      width = re.width;
      height = re.height;
      setCards(width, height / 2, pairs, display);
      break;
  }
}
cardFacesArray();
setCards(width, height / 2, pairs, display);

// set the event handler
setSKEventListener(handleEvent);


setSKDrawCallback((gc: CanvasRenderingContext2D) => {
  gc.clearRect(0, 0, gc.canvas.width, gc.canvas.height);
  width = gc.canvas.width;
  height = gc.canvas.height;
  gc.fillStyle = "darkgrey";
  gc.fillRect(0, 0, gc.canvas.width, gc.canvas.height);
  drawCards(gc);
  if (display || winMode) {
    displayTitle.draw(gc);
  }
});

// start SimpleKit
startSimpleKit();

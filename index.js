let randomNumber1 = Math.floor(Math.random() *(6-1)+1);
let randomNumber2 = Math.floor(Math.random() * (6-1)+1);
function randomNumberLeft(randomNumber1) {

console.log(randomNumber1);
console.log(randomNumber2);
if (randomNumber1 == 1) {
document.querySelector(".img1").setAttribute("src", "images/dice1.png");
 } 
if(randomNumber1 == 2){
document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} 
if(randomNumber1 == 3){
 document.querySelector(".img1").setAttribute("src", "images/dice3.png"); 
} 
if(randomNumber1 == 4){
 document.querySelector(".img1").setAttribute("src", "images/dice4.png"); 
} 
if(randomNumber1 == 5){
 document.querySelector(".img1").setAttribute("src", "images/dice5.png"); 
} 
}
function randomNumberRight(randomNumber2){
if (randomNumber2 == 1) {
document.querySelector(".img2").setAttribute("src", "images/dice1.png");
 } 
if(randomNumber2 == 2){
document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} 
if(randomNumber2 == 3){
 document.querySelector(".img2").setAttribute("src", "images/dice3.png"); 
} 
if(randomNumber2 == 4){
 document.querySelector(".img2").setAttribute("src", "images/dice4.png"); 
} 
if(randomNumber2 == 5){
 document.querySelector(".img2").setAttribute("src", "images/dice5.png"); 
} 
}
randomNumberLeft(randomNumber1);
randomNumberRight(randomNumber2);

var playear1 = prompt("enter name of playear1");
var playear2 = prompt("enter name of playear2");


var randomNumber1 = Math.random();//random 1-6
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randomDiceImages = "dice" + randomNumber1 + ".png";//dice1.png-dice6.png
//var randomImageScorce = "images/" + randomDiceImages; //image/dice1.png-dice6.png
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImages);

//second image//
var randomNumber2 = Math.random();//random 1-6
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randomDiceImages2 = "dice" + randomNumber2 + ".png";//dice1.png-dice6.png
//var randomImageScorce2 = "images/" + randomDiceImages; //image/dice1.png-dice6.png
 document.querySelectorAll("img")[1].setAttribute("src",randomDiceImages2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML =playear1 +" wins🏆";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML =playear2+" wins🏆";
}else{
  document.querySelector("h1").innerHTML = "Drow!!";
}

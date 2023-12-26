

//Change in image-1
var randomNumber1 = Math.floor(Math.random()*6 + 1);

var imageOneSource = "./images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageOneSource);


//Change in image-2
var randomNumber2 = Math.floor(Math.random()*6 + 1);

var imageTwoSource = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageTwoSource);



//Selecting winner

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}

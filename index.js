var buttons = document.querySelectorAll("button"); //selecting all button elements
var Pressedkey = ""; //value of the pressed key

//initiatting a new Aduio object to each sound
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");



for(var i=0 ; i < buttons.length ; i++){//looping over the buttons in the site
    buttons[i].addEventListener("click", function (){ //adding click event listener to the buttons
        pressedkey = this.textContent; //the value of the pressed key is the text of the button
        playSound(pressedkey);  //calling the function that plays the sounds and passing the value of the key as a parameter
        animate(pressedkey);
    })
}

document.addEventListener("keydown",function(e){ //adding keydown event listener to the whole document that listens every time a key from the keyboard is pressed
    pressedkey = e.key;  //the pressed key value taking the value of the event key
    playSound(pressedkey);
    animate(pressedkey);
})

function playSound(key){ //function to determine which key value was given and plays the corresponding sound 
    switch(key){
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kick.play();
            break;
    } 
}

function animate(pressedKey){
    for(var i=0 ; i < buttons.length ; i++){//looping over the buttons in the site
        buttons[i].classList.remove("pressed");
    }
    var activeKey = document.querySelector("." + pressedKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },50);
}
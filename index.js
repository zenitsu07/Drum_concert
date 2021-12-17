var number_of_buttons = document.querySelectorAll(".drum").length;

for (let i = 0; i < number_of_buttons; i++) {
    var current = document.querySelectorAll(".drum")[i];
   current.addEventListener('click', function (){
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)

});
    
}
addEventListener("keypress",function (event) {
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key)

})

function makeSound(key) {

    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
  
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
  
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }
  function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);//this setimeout removes pressed class after 0.1 time span
  
  }
  function buttonsan(key) {
    //selecting its class
    var cl = document.querySelector('.'+key);
    //addding class to selected query
    cl.classList.add("pressed");

    cl.classList.add("blue");
    
  }
  //? We can use evet parameters in callback functions to know every detail of the event just happened whether its click keypress or else
  

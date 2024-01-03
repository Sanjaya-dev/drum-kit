// document.querySelectorAll("button").forEach(addEventListener("click",function(){
//     alert("welcome");
// }))

var numberOfDrumButton = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumButton.length; i++) {
  // detacting button press
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var ButtonInnerHtml = this.innerHTML;
    makeSound(ButtonInnerHtml);
    buttonAnimation(ButtonInnerHtml);
  });
  // document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  //     console.log(this);
  // })
}

// detacting keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// play sound
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey).classList;
  // console.log(activeButton);
  activeButton.add("pressed");
  setTimeout(function () {
    activeButton.remove("pressed");
  }, 1000);
}

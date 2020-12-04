var number = document.querySelectorAll(".drum").length;

for(var i = 0; i<number; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    sound(this.innerHTML);
    animation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  sound(event.key);
  animation(event.key);
});

function sound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;
    case "s":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;

    case "d":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;

    case "j":
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      break;

    case "k":
      var crash = new Audio("sounds/tom-3.mp3");
      crash.play();
      break;

    case "l":
      var crash = new Audio("sounds/tom-4.mp3");
      crash.play();
      break;

    default:
      console.log(this.innerHTML);
  }

}

function animation(btnkey) {

  document.querySelector("." + btnkey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + btnkey).classList.remove("pressed");}, 100);
}

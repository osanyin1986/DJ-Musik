
$(document).keypress(function (event) {
  $("input").text(event.key);
});

$("h1").on("mouseover",function () {

  $("h1").css("color","purple");

});

$("button").on("click",function () {
  $("h1").toggle();
});




$("a").attr("href","osanyin1986@gmail.com");



$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {

console.log(event.key);
});


document.addEventListener("keypress",function(event) {
  makesound(event.key);
  buttonAmination(event.key);

});

function makesound(key) {
  switch (key) {
    case "a":
    var snare=new Audio("sounds/1.mp3");
    snare.play();
      break;

      case "n":
        var kick = new Audio("sounds/2.mp3");
        kick.play();
        break;

        case "j":
        var tom1 = new Audio("sounds/3.mp3");
        tom1.play();
          break;

          case "o":
          var tom2 = new Audio("sounds/4.mp3");
          tom2.play();
            break;

            case "l":
            var tom3 = new Audio("sounds/5.mp3");
            tom3.play();
              break;

              case "a":
              var tom4 = new Audio("sounds/6.mp3");
              tom4.play();
                break;

                case "l":
                var crash = new Audio("sounds/7.mp3");
                crash.play();
                  break;

    default: console.log(buttonInnerHTML);

  }
}


function buttonAmination(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

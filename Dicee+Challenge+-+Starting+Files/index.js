var randomNumber1 = (Math.floor((Math.random()*6))+1)

var randomDiceImage = "dice" + randomNumber1 +".png"
console.log(randomDiceImage)
var randomImageSource = "./images/dice6"
console.log(randomImageSource)
document.querySelectorAll("img")[0].setAttribute("src", "randomImageSource")
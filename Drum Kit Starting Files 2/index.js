
var numberOfDrumsButton = document.querySelectorAll(".drum").length;
for (var  i = 0; i < numberOfDrumsButton; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    alert("I got clicked");
});
}
// alert("Connected!");

var colors = [];
var pickedColor;
var numberOfSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    setupModeButtons();
    setupSquares();
    setupResetButton();
    reset();
}

function setupModeButtons(){
    for (var index = 0; index < modeButtons.length; index++) {
    modeButtons[index].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
        reset();
    });
}
}

function setupSquares(){
    for (var index = 0; index < squares.length; index++) {
    squares[index].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}
}

function setupResetButton(){
    resetButton.addEventListener("click", function(){
    reset();
});
}

function reset(){
    //generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick new random color
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares;
    for (var index = 0; index < squares.length; index++) {
        if(colors[index]){
            squares[index].style.display = "block";
            squares[index].style.background = colors[index];
        } else{
            squares[index].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}



function changeColors(color){
    for (var index = 0; index < squares.length; index++) {
        squares[index].style.background = color;  
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}
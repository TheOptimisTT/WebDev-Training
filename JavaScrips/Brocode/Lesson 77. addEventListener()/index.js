/*
    .addEventListener(event,function, useCapture)
    YOu can add many event handlers to one element.
    Even the same event that invokes different functions
*/

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

/*
innerDiv.addEventListener("mouseover",changeRed);
innerDiv.addEventListener("mouseout",changeGreen);

function changeRed(){
    innerDiv.style.backgroundColor = "red"
}
function changeGreen(){
    innerDiv.style.backgroundColor = "lightgreen"
}
*/
innerDiv.addEventListener("click",changeBlue);
outerDiv.addEventListener("click",changeBlue);

function changeBlue(){
    this.style.backgroundColor = "skyblue"
}
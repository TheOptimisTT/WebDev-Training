/*
    .onclick = button click
    .onload = browser load
    .onchange = if changed a.k.a inputbox
    
        hovers:
    .onmousemove
    .onmouseout

        clicks:
    .onmousedown
    .onmouseout
*/
const element = document.getElementById("myButton");
element.onclick=doSomething;

const element2 = document.body;
//element2.onload=doSomething;

const element3 = document.getElementById("myText");
element3.onchange = doSomething;

//const element4 = document.getElementById("myDiv");
//element4.onmousemove = doSomething;
//element4.onmouseout = doSomething2;

const element4 = document.getElementById("myDiv");
element4.onmousedown = doSomething;
element4.onmouseup = doSomething2;

function doSomething(){
    //alert("You did smth");
    element4.style.backgroundColor = "red";
}
function doSomething2(){
    //alert("You did smth");
    element4.style.backgroundColor = "lightgreen";
}



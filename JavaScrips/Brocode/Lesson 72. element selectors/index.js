let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";


//Creates a list of elements with the "fruites"
let elements = document.getElementsByName("fruites");

elements.forEach(element => {
    if(element.checked){
        console.log(element);
    }
});

//By tag. returns HTML collection
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "green";
vegetables[1].style.backgroundColor = "lightgreen";

//by class. Array like obj
let deserts = document.getElementsByClassName("deserts");
deserts[0].style.backgroundColor = "blue";
deserts[1].style.backgroundColor = "skyblue";




//Query selector. ID, ClassName, Tag or atribute
let element2 = document.querySelector("#myTitle");//ID
element2.style.backgroundColor="lightgreen";

//the 1st encountered Class
let element3 = document.querySelector(".deserts");
element3.style.backgroundColor="lightgreen";

//Tag. First only
let element4 = document.querySelector("li");
element4.style.backgroundColor="lightgreen";

//atribute. First only
let element5 = document.querySelector("[for]");
element5.style.backgroundColor="lightgreen";



//QuerySelectorALL. For all encountered elements

let elements1 = document.querySelectorAll("li");
elements1.forEach(element => {
    element.style.backgroundColor="pink";
});

let elements2 = document.querySelectorAll(".deserts");
elements2.forEach(element => {
    element.style.backgroundColor="gold";
});

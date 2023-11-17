/*
    window =    interface used to talk with the web browser
                the DOM is a property of the window

 ------------------------------------------               
const myBtn = document.querySelector("#myBtn");

console.dir(window);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.scrollX);
console.log(window.scrollY);


console.log(window.location.href);
window.location.href = "www.google.com"

window.alert("Hello");
window.confirm("Press Ok to confirm");



myBtn.addEventListener("click",()=>window.open("https://google.com"));
myBtn.addEventListener("click",()=>window.close());
myBtn.addEventListener("click",()=>window.print());
*/

let age = window.prompt("Enter your age");
if(age<18){
    window.alert("You must be 18+ to visit");
    window.close();
}


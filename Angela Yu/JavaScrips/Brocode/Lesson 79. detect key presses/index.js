const myDiv = document.getElementById("myDiv");

window.addEventListener("keydown",move);
let x=0;
let y=0;
let speed = 10;
function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=speed;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=speed;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=speed;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=speed;
            myDiv.style.left = x + "px";
            break;
        default:break;
    }
}
var btns = document.querySelectorAll(".drum");//[0].addEventListener("click", handleClick);
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click", handleClick);
}

function handleClick(){
    alert("I got clicked");
}
const myBtn = document.getElementById("myBtn");
const myAnimation = document.getElementById("myDiv");

myBtn.addEventListener("click",scale);

/*
function move(){
    let timerId = null;
    let x = 0;
    let y = 0;
    
    timerId = setInterval(frame,5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }else{
            y+=1;
            x+=1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
        }
    }
}
*/
/*
function spin(){
    let timerId = null;
    let deg = 0;
    
    timerId = setInterval(frame,5);

    function frame(){
        if(deg >= 360){
            clearInterval(timerId);
        }else{
            deg += 1;
            //myAnimation.style.transform = "rotateX("+deg+"deg)";
            //myAnimation.style.transform = "rotateY("+deg+"deg)";
            myAnimation.style.transform = "rotateZ("+deg+"deg)";
        }
    }
}
*/
/*
function combo(){
    let timerId = null;
    let deg = 0;
    let x = 0;
    let y = 0;
    timerId = setInterval(frame,5);

    function frame(){
        if(x >= 1000 || y >= 1000){
            clearInterval(timerId);
        }else{
            deg += 3;
            y+=1;
            x+=1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "rotateY("+deg+"deg)";
        }
    }
}
*/
function scale(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;
    
    timerId = setInterval(frame,5);

    function frame(){
        if(scaleX >=2||scaleY >=2){
            clearInterval(timerId);
        }else{
            scaleX+= 0.01;
            scaleY+= 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}
const myBtn = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myBtn.addEventListener("click",()=>{
    if(myImg.style.display == "none"){
        myImg.style.display = "block";
    }else{
        myImg.style.display = "none";
    }
})
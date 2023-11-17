document.getElementById("submitBtn").onclick = function (){

    let temp;
    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        temp = temp.toLocaleString(undefined, {style:"unit", unit:"celsius"});
        document.getElementById("tempLabel").innerHTML = temp;

    }else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        temp =temp.toLocaleString(undefined, {style:"unit", unit:"fahrenheit"});
        document.getElementById("tempLabel").innerHTML = temp;

    }else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }

}





function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function tofahrenheit(temp){
    return temp*9/5+32;
}
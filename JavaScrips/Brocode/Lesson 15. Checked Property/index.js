// Checked poperty = its on checkbox and radiobuttons
    // it let us know if a checkbox or radio is check 
    // and it returns a boolean value

    document.getElementById("myBtn").onclick = function(){
        const myCheckBnt = document.getElementById("myCheckBox").checked;
        const visaBtn = document.getElementById("visaBtn").checked;
        const masterCardBtn = document.getElementById("masterCardBtn").checked;
        const paypalBtn = document.getElementById("paypalBtn").checked;
        
        if(myCheckBnt){
             console.log("you are sub");
        }else{
            console.log("NOYT");
        }
        
        if(visaBtn){
            console.log("Visa")
        }else if(masterCardBtn){
            console.log("Master Card");
        }else if(paypalBtn){
            console.log("Pay Pal");
        }else{  
            console.log("Err");
        }
    }
/*
    error = object with a description of 
            something went wrong

            Can't open a file
            Lose connection
            User types incorrect input
            TypeError

    throw = executes a user-defined error
    finally = always executes no matter the outcome of try/catch
*/

try{
    let x = window.prompt("Enter a number");
    x = Number(x);

    if(isNaN(x)||x==""){
        throw "That wasn't a number";
    }

    console.log(x);
}catch(error){
    console.log(error);
}
finally{
    console.log("always works");
}
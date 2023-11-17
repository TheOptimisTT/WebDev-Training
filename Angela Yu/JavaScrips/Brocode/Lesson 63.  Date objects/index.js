/*
    Date objects = used to work with dates & times
*/


let date = new Date();// current date and time
/*
let date1 = new Date(0); //12/31/1969 06:00:00 PM
let date2 = new Date(1000) // Date(0) + 1000ms
let date3 = new Date(2023,0,1,2,3,4,5) // 01/01/2023 02:03:04 AM
let date4 = new Date("January 1, 2023 00:00:00");

let year = date.getFullYear();//year
let dayOfMonth = date.getDate();//date
let dayOfWeek = date.getDate();//weekday
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/
/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(100);

date=date.toLocaleString();*/

document.getElementById("myLabel").innerHTML = (formatDate(date)+formatTime(date));

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return `${month}/${day}/${year}`;
}
function formatTime(date){
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ms = date.getMilliseconds();
    return ` ${hour}:${minutes}:${seconds}:${ms}`;
}
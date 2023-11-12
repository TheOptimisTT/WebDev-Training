const myLabel  = document.getElementById("myLabel");

upDate();
setInterval(upDate,1000);
function upDate(){
    let date = new Date();
    myLabel.innerHTML=formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm":"am";
        hours = (hours%12) || 12;

        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatZeros(time){
        time = time.toString();
        return time.length < 2 ? "0"+time:time;
    }
}
/*
    Canvas API =    a means for drawing graphics
                    used for animations, games, data visualization
*/
// 500 x 500
const canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/*
context.strokeStyle = "purple";    // color
context.lineWidth = 10;         // line width
context.beginPath()             // Paint Start
context.moveTo(0,0);            // set brush on canvas
context.lineTo(250,250);      
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke();               // Generate the Img
*/

/*
//Draw Triangle
context.strokeStyle = "black";
context.fillStyle = "yellow";
context.lineWidth = 10;

context.beginPath();
context.moveTo(0,250);
context.lineTo(500,250);
context.lineTo(250,0);
context.lineTo(0,250);
context.stroke()
context.fill();                 //fill
*/


/*Rectangle
context.strokeStyle = "black";
context.fillStyle = "yellow";
context.lineWidth = 10;

context.strokeRect(10,10,250,250); // startX,startY,endX,endY
context.fillRect(10,10,250,250); // startX,startY,endX,endY
*/

/*Circle

context.beginPath();
context.arc(250,250,200,0,2*Math.PI); // startX,startY, Radius, sAngle, eAngle, counterclockwise
context.stroke();
*/
context.font= "50px sans-serif";
context.textAlign = "center";
context.fillText("You win!",canvas.width/2,100)
import express from "express";

const app = express();
const port = 3000;

let today = Date();


app.get("/", (req, res) => {
    let today =new Date();
    let day = today.getDay();

    if(day==0||day==6){
    res.render("index.ejs",{
        dayType: "its the weekend",
        advice: "time to relax"
    })
    } else{
        res.render("index.ejs",{
            dayType: "its the week",
            advice: "time to work"
        })
    } 
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  
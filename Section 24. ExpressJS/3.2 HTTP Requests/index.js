import express from "express";
const port = 3000;
const app = express();

app.get("/",(req,res)=>{
  res.send("Hello world");
});
app.get("/about",(req,res)=>{
  res.send("About me");
});
app.get("/contact",(req,res)=>{
  res.send("Contact me");
});
app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
});



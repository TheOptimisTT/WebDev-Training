import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>home</h1>');
})
app.get('/about', (req, res) => {
    res.send('<h1>about page</h1>');
  })
app.get('/contact', (req, res) => {
    res.send('<h1>+44 565 5656 565</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
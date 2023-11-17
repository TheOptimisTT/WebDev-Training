/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

let userURL;

inquirer
  .prompt([
    {
        message:"Type the URL:",
        name:"URL",
    },
  ])
  .then((answers) => {
    userURL = answers.URL;
    let qr_png = qr.image(userURL, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('i_love_qr.png'));
    fs.writeFile("message.txt",userURL,(err)=>{
        if(err) throw err;
        console.log("the file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
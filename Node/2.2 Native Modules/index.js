const fs = require('node:fs');
fs.writeFile('text.txt','Hello from Me!',(err) => {
    if (err) throw err;
    console.log('The file has been saved!\n');
  });
  
fs.readFile('text.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 
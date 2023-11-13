/* 
    add/change HTML elements
    .innerHTML is calnerable to XSS attcks
    .textContent is more secure
*/

//adding an element to HTML body
const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Enter your name");
document.body.append(nameTag);

//adding an item to a list ul ol
const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "banana";
myList.append(listItem);//append- adding last, prepend- adding first
myList.insertBefore(listItem,myList.getElementsByTagName("li")[1]);// add before the 2nd element

// creatinf a txt file using fs module

const { log } = require("console");
const fs = require("fs");
let info = "NodeJS is built on an event-driven architecture, which is fundamental to its asynchronous and non-blocking I/O model. This architecture revolves around the concept of events, event emitters, and event listeners, enabling efficient handling of asynchronous operations and concurrent requests."
fs.appendFile('node_architecture.txt',info,(err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!')}
);

// reading and consoling  data from a file on terminal

let pathname = "./node_architecture.txt";
fs.readFile(pathname,'utf-8',(err,data)=>{
if(err){
console.log('error reading the file',err);
return;

}
console.log('file content',data);


})

// appending data to the file


const appendData = 'Node.js allows programmers to develop server-side JavaScript and frontend JavaScript codes with simplicity. One of the major Node.js advantages is that it eliminates the need for two resource teams, saving time, money, and energy for overall project development.';

fs.appendFile('node_architecture.txt', appendData, (err) => {
    if (err) {
        console.log("Couldn't append data:", err);
    } else {
        console.log("Content appended successfully to the file");
    }
});

// deleting created file
fs.unlink('node_architecture.txt', (err) => {
    if (err) {
        console.error("Error deleting the file:", err);
    } else {
        console.log("File deleted successfully!");
    }
});

const fs=require('fs');

const data="I am new Data";
console.log("Update");

fs.writeFileSync("./data.txt",data);
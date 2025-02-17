const fs=require('fs');


const write=()=>{
    fs.writeFile('./data.txt','This is written by me',(err)=>{
        if(err)
            console.error(err);
        else
            console.log("File updated");
    
    })
}
write();

console.log("new Data");

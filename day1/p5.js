const fs=require('fs');


const write=()=>{
    fs.writeFile('./mydir/data.txt',' ',(err)=>{
        if(err)
            console.error(err);
        else
            console.log("File updated");
    
    })
}
write();

console.log("new Data");

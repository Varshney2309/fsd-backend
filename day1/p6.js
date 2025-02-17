const fs=require('fs');

const append=()=>{
    fs.appendFile('./data.txt','New Data',(err)=>{
        if(err)
            console.error(err);
        else
            console.log("data added");
    
    })
}
append();

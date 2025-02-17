const fs=require('fs');

fs.rmdir('mydir',(err)=>{
    if(err){
        console.error(`error deleting file: ${err}`);
        return;}

    else
        console.log("Directory  deleted");

})




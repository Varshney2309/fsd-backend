const fs=require('fs');

fs.mkdir("mydir",(err)=>{
    if(err){
        console.error(`Error deleting file: ${err}`);
        return ;
    }
    console.log("Directory Created Succesfully");
})
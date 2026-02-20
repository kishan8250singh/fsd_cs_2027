const fs = require('fs');
const fs1 = require('fs').promises;
function datawrite(){
    let statusmsg ="";
    try{
      fs.writeFileSync('data.txt',"Data write ");  
      console.log("Data written to file");
      statusmsg = "Data written to file successfully. ";
    }catch(err){
        console.log(err);
        statusmsg = "Error writing data synchronously. "+err.message;
    }
    return statusmsg;
}

function dataread(){
    let statusmsg ="";
    try{
        const data  = fs.readFileSync('data.txt','utf-8');
        console.log("Data read from file: " + data);
        statusmsg = "Data read from file successfully. Data: " + data;
    }catch(err){
        console.log(err);
        statusmsg = "Error reading data synchronously. "+err.message;
    }
    return statusmsg;
}


function deletefile(){
    let statusmsg ="";
    try{
        fs.unlinkSync('data.txt');
        console.log("File deleted successfully.");
        statusmsg = "File deleted successfully.";
    }catch(err){
        console.log(err);
        statusmsg = "Error deleting file. "+err.message;
    }
    return statusmsg;
}

async function readfilesync(){
    let statusmsg = "";
    try{
       const data = await fs1.readFile('student.json',{encoding:'utf-8'});
       statusmsg = "File read successfully. Data: " + data;
      
    }catch(err){
        console.log(err);
        return "Error reading file synchronously. "+err.message;
    }
   return statusmsg;
}
module.exports = {datawrite, dataread, deletefile, readfilesync};

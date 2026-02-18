const fs = require('fs');
const fs1 = require('fs/promises');
function datawrite(){
    let statusmsg ="";
    try{
      fs.writeFileSync('data.txt',"Data write synchronously");  
      console.log("Data written to file");
      statusmsg = "Data written to file successfully. ";
    }catch(err){
        console.log(err);
        statusmsg = "Error writing data synchronously. "+err.message    ;
    }
    return statusmsg;
}
module.exports = datawrite;

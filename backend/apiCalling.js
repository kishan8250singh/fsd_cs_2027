// function sum(a,b){
//     return a+b;
// }
async function getremotedata(){
    const server  = await fetch("https://dummyjson.com/products");
    const data  = await server.json();
    return data;
}
  
module.exports = getremotedata;
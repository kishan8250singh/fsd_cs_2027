const http = require('http');
const PORT = 4004;
const apidata = require('./apiCalling.js');
const {dataread,datawrite,deletefile,readfilesync} = require('./usefsmodule.js');
const server = http.createServer(async(req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type",
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // ✅ Handle preflight request

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
//  res.setHeader('Content-Type', 'text/json');
//  res.end('Hello World');
 if(req.url==='/data' && req.method === 'POST'){
   res.setHeader('Content-Type','application/json');
   const data = {
     name: "John Doe",
     age: 30,
 }

  res.end(JSON.stringify({msg:data}));
 }
 else if(req.url==='/data' && req.method === 'GET'){
   res.setHeader('Content-Type', 'application/json');
   const jsonData = await apidata();
    res.end(JSON.stringify({msg:jsonData}));
 }
  else if(req.url==='/datawrite' && req.method === 'GET'){
   res.setHeader('Content-Type', 'application/json');
   const jsonData =  datawrite();
    res.end(JSON.stringify({msg:jsonData}));
 }
 else if(req.url==='/dataread' && req.method === 'GET'){
   res.setHeader('Content-Type', 'application/json');
   const jsonData =  dataread();
    res.end(JSON.stringify({msg:jsonData}));
 }
 else if(req.url==='/datadelete' && req.method === 'DELETE'){
   res.setHeader('Content-Type', 'application/json');
   const jsonData =  deletefile();
    res.end(JSON.stringify({msg:jsonData}));
 }
 else if(req.url==='/readfilesync' && req.method === 'GET'){
   res.setHeader('Content-Type', 'application/json');
   const jsonData = await readfilesync();
    res.end(JSON.stringify({msg:jsonData}));
 } 
 else if(req.url==='/register' && req.method === 'POST'){
   res.setHeader('Content-Type', 'application/json');
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const userData = JSON.parse(body);
        console.log("Received user data:", userData);
        res.end(JSON.stringify({msg:"User registered successfully", data: userData}));
    });
 }
 else{
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1 style="color:red;">404 Not Found</h1>`);
 }
})
server.listen(PORT,() => {
  console.log("server is listening on port " + PORT);
})
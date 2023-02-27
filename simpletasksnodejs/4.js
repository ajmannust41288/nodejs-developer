//load http
const http=require('http');
//server
http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    response.write("This is ajman");
    response.end();
}).listen(2000);
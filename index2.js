// const http=require('http');
//task 1
// http.createServer((req,resp)=>{
//     resp.write("Hello this is ajman ");
//     resp.end();
// }).listen(4500);
// task 2--------------------------------------
// function datacontrol(req,resp){
//         resp.write("<h1>Hello this is ajman </h1>");
//     resp.end();
// }
//arrow function
// const datacontrol=(req,resp)=>{
//     resp.write("<h2>Hello this is Noman</h2>");
//         resp.end();
// }
// http.createServer(datacontrol).listen(4500);
// console.warn("hello this is me");
//=================================================package color practices
// import chalk from 'chalk';
// const log = console.log;

// Combine styled and normal strings
// log(chalk.blue('ajman') + ' World' + chalk.green('khan'));
// log(chalk.blue.bgRed.bold('Hello world!'));
//passing  multiple arguments 
// log(chalk.blue.bgBlueBright.bold('Helo','world!','Foo','bar','biz','baz'));
//nested styles
// log(chalk.red('Hello',chalk.underline.bgBlue('world')+'!'));
//nested styles 
// log(chalk.green(
//     'I am a green line '+
//     chalk.blue.underline.bold('with a blue substring')+
//     'that becomes green again  '
// ));
// use RGB colors in the terminal 
// log(chalk.rgb(123,45,67).underline('underline Redish color'));
//Defined your theme 
// const error=chalk.bold.red;
// const warning=chalk.hex('#FFA500');
// log(error('Eroor'));
// log(warning('Warning'));
//Take advantage of console.log string
// const name='Sindre';
// log(chalk.green('Hello %s'),name);
// const http=require('http');
// const data=[{name:'ajman1',email:'ajman1234@gmail.com',contact:'52287'},
// {name:'ajman2',email:'ajman234@gmail.com',contact:'58987'},
// {name:'ajman3',email:'ajman145@gmail.com',contact:'5567'},
// {name:'ajman4',email:'ajman12784@gmail.com',contact:'590987'},
// {name:'ajman5',email:'ajman1784@gmail.com',contact:'599287'},
// {name:'ajman6',email:'ajman15434@gmail.com',contact:'577787'},
// {name:'ajman7',email:'ajman12894@gmail.com',contact:'54447'}];
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application/json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);
//====================================================================
// module.exports=function(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.fullName=function(){
//         return this.firstName+''+this.lastName;
//     }
// }
//=================================================================server.js
// var http = require('http'); // 1 - Import Node.js core module

// var server = http.createServer(function (req, res) {   // 2 - creating server

//     //handle incomming requests here..
//     res.writeHead('This is me ajman khan wazir')

// });

// server.listen(5000); //3 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')
//====================================================================example http

// var http = require('http'); // Import Node.js core module

// var server = http.createServer(function (req, res) {   //create web server
//     if (req.url == '/') { //check the URL of the current request
        
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
//         // set response content    
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
    
//     }
//     else if (req.url == "/student") {
        
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is student Page.</p></body></html>');
//         res.end();
    
//     }
//     else if (req.url == "/admin") {
        
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is admin Page.</p></body></html>');
//         res.end();
    
//     }
//     else if (req.url == "/staff") {
        
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is staff Page. please follow this page for more updates</p></body></html>');
//         res.end();
    
//     }
//     else if (req.url == "/manager") {
        
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><h2>This is manager Page.</h2><br> <p> please follow this page for more info </p></body></html>');
//         res.end();
    
//     }
//     else if (req.url == "/manager/sale") {
        
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><h2>This is sale account Page.</h2><br> <p> please follow this page for more info </p></body></html>');
//         res.end();
    
//     }
//     else
//         res.end('Invalid Request!');

// });

// server.listen(5000); //6 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')
//=========================================================================================server.js end=======================
//data.js ===============================================================
module.exports={
    firstName:'Wakil',
    middleName:'khan',
    lastName:'wazir'
};
//===============================================================================message.js========
// module.exports='hello world';
//====================================   exports object
// exports.SimpleMessage='Hello ajman';
//=============================================
module.exports.log = function (msg) { 
    console.log(msg);
};
//=================================================================app.js==============
var mymodule=require('./log.js');
mymodule.info('  This is my first nodjs');
//=================================================================data.js
module.exports={
    firstName:'Wakil',
    middleName:'khan',
    lastName:'wazir'
};
//=======================================================================log.js
var log={
    info:function(info){
        console.log('info'+info);
    },
    warning:function(warning){
        console.log('warning'+warning);
    },
    error:function(error){
        console.log('error'+error);
    }
};
module.exports=log;
//====================================================================




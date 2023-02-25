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
//===============================================================================================
//====================================simple-node-logger uses
// const log = require('simple-node-logger').createSimpleLogger('project.log');
// const SimpleNodeLogger = require('simple-node-logger'),
// 	opts = {
// 		logFilePath:'mylogfile.log',
// 		timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
// 	},
// log = SimpleNodeLogger.createSimpleLogger( opts );
// const log = require('simple-node-logger').createSimpleFileLogger('project.log');
//sting literal exxports

// var msg=require('./message.js');
// console.warn(msg);
//====================================   exports object
// var msg=require('./message.js');
// msg.log('hello wazir');
//============================================================
// var person=require('./data.js');
// console.log('person full name is :  '+person.firstName+' '+person.middleName+' '+person.lastName);
//=================================================================
// var person=require('./person.js');
// var person1=new person('jameski','borton');
// console.log(person1.fullName());
//============================================expressjs 
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!');
 
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
//====================================================next example of http
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

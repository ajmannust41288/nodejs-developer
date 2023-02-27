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
//==============================================filse system 
// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join('crud');
// for(i=0;i<5;i++){
//     fs.writeFileSync('hello.txt','a simple txt file');
// }
// const dirpath=path.join(__dirname,'crud');
// const filepath='${dirpath}/apple.txt';
// fs.writeFileSync(filepath,'This is apple txt file inside crud file ');
// console.log(path);
//============================how to create a nodejs directory================
// const fs = require("fs");

// const path = "./files";

// fs.access(path, (error) => {

// // To check if the given directory
// // already exists or not
// if (error) {
// 	// If current directory does not exist
// 	// then create it
// 	fs.mkdir(path, (error) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log("New Directory created successfully !!");
// 	}
// 	});
// } else {
// 	console.log("Given Directory already exists !!");
// }
// });
//========================================================create files inside directory
// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple txt file");
// }
// const dirpath=path.join(__dirname,'crud');
// const filepath='${dirpath}/apple.txt';
// fs.writeFileSync(filepath,'This is apple txt file inside crud file ');
// console.log(path);
//====================================================create crude directory inside a files dire
// const fs=require('fs');
// const path='./files/crude';
// fs.access(path,(error)=>{
//     if(error){
//         //if it does not exist
//         fs.mkdir(path,(error)=>{
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 console.log('Crude directory is create inside file directory');
//             }
//         });
//     }else{
//         console.log("Given Directory already exists ");
//     }
// });
///=====================================================
// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'./files/crude');
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirpath+"/help"+i+".txt","This second file name help");
// }
//==============================================multilevel directory ===============
// const fs = require("fs");
  
// // Multilevel directory
// const path = "./directory1/directory2/new-directory";
  
// fs.access(path, (error) => {
  
//   // To check if given directory 
//   // already exists or not
//   if (error) {
//     // If current directory does not exist then create it
//     fs.mkdir(path, { recursive: true }, (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("New Directory created successfully !!");
//       }
//     });
//   } else {
//     console.log("Given Directory already exists !!");
//   }
// });
//======================================================remove
// const fs=require('fs');
// const path = "./directory1"; 
// fs.remove(path, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder Deleted Successfully !!");
//   }
// });
//===========================================================
// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__filename,'files/crude/help1.txt');
// // const filepath='${dirpath}/crude/help1.txt';
// fs.readFile(dirpath,(err,item)=>{
//     console.log(item);
// });
//====================================================
// const fs=require('fs');
// const path=require('path');
// const filepath=path.join(__dirname,'files');
// fs.readFileSync("${filepath}/hello1.txt",'utf8',(err,item)=>{
//     console.log(item);
// });
//===============================how to append file 
// const fs=require('fs');
// const path='./files/hello1.txt';
// fs.appendFile(path,'and file name is appended sucessfully.',(err)=>{
//     if(!err){
//         console.log("file is append ");
//     }
// });
//====================================how to read directory by readdir 
// const fs=require('fs');
// const path='./files/crude';
// fs.readdir(path,'utf-8',(err,item)=>{
// console.log(item);
// });
//===============================================how to rename file 
// const fs=require('fs');
// fs.rename('./hello.txt','./apple.txt',(err,item)=>{
//     if(!err){
//         console.log("file rename");
//     }else{
//         console.log("not renamed");
//     }
// });
//===================another example  of renamed 
// const fs=require('fs');
// fs.rename('./files/crude/help3.txt','./files/crude/apple3.txt',(err,item)=>{
//     if(!err){
//         console.log("file renamed successsfuly");
//     }else{
//         console.log("not renamed");
//     }
// });
//========================================delete file 
const fs=require('fs');
fs.unlinkSync('./files/crude/help0.txt');
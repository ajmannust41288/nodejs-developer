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
const http=require('http');
const data=[{name:'ajman1',email:'ajman1234@gmail.com',contact:'52287'},
{name:'ajman2',email:'ajman234@gmail.com',contact:'58987'},
{name:'ajman3',email:'ajman145@gmail.com',contact:'5567'},
{name:'ajman4',email:'ajman12784@gmail.com',contact:'590987'},
{name:'ajman5',email:'ajman1784@gmail.com',contact:'599287'},
{name:'ajman6',email:'ajman15434@gmail.com',contact:'577787'},
{name:'ajman7',email:'ajman12894@gmail.com',contact:'54447'}];
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);


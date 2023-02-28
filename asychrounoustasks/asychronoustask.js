//==========================ascynchrounous 
// console.log("start here");
// setTimeout(()=>{
// console.log("logic here ");
// },2000);
// console.log("complete execution here");
//output are
// start here
// complete execution here
// logic here
//=====================================example 2 of ascychrounous
// let a=10;
// let b=0;
// setTimeout(() => {
//     b=20;
// }, 2000);
// console.log(a+b);//10
//====================================Use of Promise
let a=10;
let waitingdata=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30);
    }, 2000);
});
waitingdata.then((data)=>{
    b=data;
    console.log(a+b);//print 40 after 2second
});
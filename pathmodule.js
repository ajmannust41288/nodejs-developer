var path=require("path");
//const a=path.basename('D:/Documentnust/Sem8/ProjectReport/FYPimages/Products.jfif');
//const a1=path.dirname('D:/Documentnust/Sem8/ProjectReport/FYPimages/Products.jfif');
//const a2=path.extname('D:/Documentnust/Sem8/ProjectReport/FYPimages/Products.jfif');
//console.log(a);// return product.jfif
//console.log(a1);//return directory 
//console.log(a2);//return extension 
/*const pathobject=path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  });
  */
/* const pathobject=path.format({
     root:'/',
     dir:'C/Home/Users/Download',
     base:'myfile.txt',
     ext:'ignored'
 })
console.log(pathobject);
*/
const a=path.isAbsolute('/foo/bar'); 
console.log(a);// true 
const a1=path.isAbsolute('foo/bar');
console.log(a1);// false
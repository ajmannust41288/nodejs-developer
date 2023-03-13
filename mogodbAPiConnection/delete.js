//delete documents of mongodb are here 
const dbconnect=require('./mongodb');

const deleteData=async ()=>{
    let data=await dbconnect();
    let result= await data.deleteOne({name:"VIVO23"});
    if(result.acknowledged){
        console.warn("Data deleted");
    }
    else{
        console.warn("deletion causes error ");
    }
    
}
deleteData();
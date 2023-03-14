const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tut');
//schema is database field actuallay // use for validation of field 
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});
//model uses schema to connect nodejs with mongodb 
const deleteInDB = async ()=>{
    const Product = mongoose.model('musics', productSchema);
    let data = await Product.deleteOne({name:'max pro 6'})
    console.log(data);
}
deleteInDB();
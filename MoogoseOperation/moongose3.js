
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
const updateInDB =async  () => {
    const Product = mongoose.model('music', productSchema);
    let data =await  Product.updateOne(
        { name: "max 100" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}
updateInDB();
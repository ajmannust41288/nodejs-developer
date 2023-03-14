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
const saveInDB = async () => {
    const Product = mongoose.model('music', productSchema);
    let data = new Product({
        name: "max 103",
        price: 2004,
        brand: 'Maxpro',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}
saveInDB();
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
    const Product = mongoose.model('product', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('product', productSchema);
    let data =await  Product.updateOne(
        { name: "max 6" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('product', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}
const findInDB = async ()=>{
    const Product = mongoose.model('product', productSchema);
    let data = await Product.find({name:'max pro 611'})
    console.log(data);
}

findInDB();
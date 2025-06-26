const mongoose=require('mongoose')
const userproductmodel = require('./userproduct')

const userorderSchema=new mongoose.Schema({
    orderItems:Array,
    totalAmount:String,
    status:String,
    creditData:Date
})

const userordermodel=mongoose.model('userorder',userorderSchema)

module.exports=userordermodel
const express=require('express')
const { allproduct, singleproduct } = require('../controllers/userproducts')
const { userorders } = require('../controllers/userorders')
const router=express.Router()


router.get('/product',allproduct)
router.get('/product/:id',singleproduct)
router.post('/order',userorders)


module.exports=router
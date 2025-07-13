const express=require('express')
const { allproduct, singleproduct } = require('../controllers/userproducts')
const { userorders } = require('../controllers/userorders')
const { registerformController } = require('../controllers/registerform')
const { userloginController } = require('../controllers/userloginController')
const router=express.Router()

//  routes,controller,model
router.get('/product',allproduct)
router.get('/product/:id',singleproduct)
router.post('/order',userorders)
router.post('/registerform',registerformController)
router.get('/userlogin',userloginController)


module.exports=router
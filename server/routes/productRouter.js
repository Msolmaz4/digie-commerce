const router =require('express').Router();
const allProductsController = require('../controllers/productController/allProductsController')


router.post('/',allProductsController)


module.exports=router
const router =require('express').Router();
const allProductsController = require('../controllers/productController/allProductsController')
const oneProductController = require('../controllers/productController/oneProductController')


router.post('/',allProductsController)
router.get('/detail/id', oneProductController)


module.exports=router
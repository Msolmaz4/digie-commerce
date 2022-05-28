const mongoose = require('mongoose')
const Products = require('../../models/productsModel')

const allProductsController = async (req ,res)=>{
  try{

    const {keyword,min_price,max_price,taxonomy_id,page} =req.body
    let query ={};
    keyword ? query.title = new RegExp(keyword,i) :null
    min_price ? query.price ={['$gte'] : min_price} : null
    max_price ? query.price ={['$gte'] : max_price} :null
    min_price && max_price ? query.price ={['$gte'] : min_price ,['$gte'] : max_price} :null
    taxonomy_id ?query.taxonomy_id = taxonomy_id : null
   const products =await Products.find(query).limit(20).skip((page-1)*20) //sayfa gecisini  skiple
   
   res.status(200).json({
       message : 'sucess',
       data: products
   })
  }catch(err)  {
 res.send(err.message)
  }


}

module.exports =allProductsController
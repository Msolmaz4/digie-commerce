const mongoose = require('mongoose')
const Products = require('../../models/productsModel')
const Pruducts = require('../../models/productsModel')


const oneProductController = async (req,res)=>{
    try {
        const {id} =req.params
        if(id){
        Products.findById(id).then((response) =>{
            res.status(200).send({
                message:'sucess',
                data:response
            })
        })
        .catch(err =>res.send(err.message))
        }

    }catch(err){
        res.send(err.message)
    }
}

module.exports =oneProductController
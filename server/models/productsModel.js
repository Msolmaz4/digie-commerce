const mongoose =require('mongoose')

//schem a taslik 

const productSchema =new mongoose.Schema({
    title :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    quantity :{
        type:Number,
        required:true,
        min:0

    },
    num_favorers:{
        type:Number,
        min:0,
        default:0
    },
    tags:{
        type:[String],
        default:[],

    },
    processing_min :{
        type:Number,
        min:0
    },
    processing_max :{
        type:Number,
        min:0
    },
    price:{
        type:Number,
        min: 0,
        required:true
    },
    img:{
        type:String,
        default:'www.google.com'
    },
    taxonomy_id :{
        type:Number,
        required:true,
        enum:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    },
    onSale:{
        type:Boolean,
        default:true,
        required:true
    },
    //sepete atilan gibi
    inCard:{
        type:Number,
        min:0,
        default:0
    }
})



const Products =mongoose.model('Product',productSchema)
module.exports = Products
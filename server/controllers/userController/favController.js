const jwt_decode=require('jwt_decode')
const Products = require('../../models/productsModel')
const Users = require('../../models/usersModel')


exports.addFav =async (req,res) =>{
    try{

        const { id} = req.params
        const { token} = req.headers
        const user =jwt_decode(token)
        const userId =user.userId
        if(!id) return res.send('invalid id')
        let product = await Products.findById(id)
        if(!product) return res.send('no product')
        const userInfo= await Users.findById(userId)
        if(!userInfo.favs.find(el => el._id == id)){
            userInfo.favs.push(product)
            userInfo.save()
            res.send(userInfo)
        }else{
            res.send('babba ek')
        }

    }catch(err){

    }
}
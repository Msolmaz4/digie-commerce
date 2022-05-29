const Users = require('../../models/productsModel')
const bcrypt = require('bcrypt')


const registerController = async (req,res)=>{
    try{
        const { email,password,name,surname} = req.bod
        if(!email || !password || !name || surname ) return res.send('please fiil inre')
        const emailControl =await Users.findOne({email:email})
        if(emailControl) return res.send('this user is already ')
        const newUser = await new Users({
            name:name,
            surname:surname,
            email:email,
            password:bcrypt.hashSync(password,8)
        })

    }catch(err){
        console.log(err.message)
        res.send(err.message)
    }

}
module.exports = registerController
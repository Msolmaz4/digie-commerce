const Users =require('../../models/usersModel')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

const loginController = async (req,res) =>{

    try{
        const {email , password} =req.body
        if(!email || !password ) return res.send('plesa fiil in the')
        const emailControl = await Users.findOne({email:email})
        if(!emailControl) return res.status(400).send('no user with this email')
        const passwordMatch = bcrypt.compareSync(password,emailControl.password)
        if(!passwordMatch) return res.status(400).send('wrogn password')
        const userToken =jwt.sign(
            {userId:emailControl._id},
            process.env.AUTH_SEC_KEY
        )
        emailControl.password = null
        res.status(200).json({
            message:'succes',
            data:emailControl,
            token:userToken
        })
    }catch(err){
        res.send(err.message)
        console.log(err.message)
    }

}
module.exports = loginController
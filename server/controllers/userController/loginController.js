const Users =require('../../models/usersModel')
const bcrypt = require('bcrypt')

const loginController = async (req,res) =>{

    try{
        const {email , password} =req.body
        if(!email || !password ) return res.send('plesa fiil in the')
        const emailControl = Users.findOne({email:email})
        if(!emailControl) return res.status(400).send('no user with this email')
        const passwordMatch = bcrypt.compareSync(password,emailControl.password)
    }catch(err){
        res.send(err.message)
        console.log(err.message)
    }

}
module.exports = loginController
const jwt = require('jsonwebtoken')


const isLoggedIn = (req,res,next)=>{
   
    try{
        const {token} =req.headers
        jwt.verify(token,process.env.AUTH_SEC_KEY,(err,decoded))
        if(err) return res.status(403).send('baba zokuy')
        req.token = token
        next()
    }
    catch(err){
        res.send
    }


     
    
}
module.exports= isLoggedIn
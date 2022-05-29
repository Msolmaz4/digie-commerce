const router = require('express').Router()
const registerController = require('../controllers/userController/registerController')

router.post('/register',registerController)





//POST =>'/register' =>req.body
//POST=>'/login' =>req.body
//POST=>'/fav/:id' =>req.params
//DELETE =>'/fav/:id' =>req.params
//GET =>'/checkAuth' =>req.headers



module.exports =router
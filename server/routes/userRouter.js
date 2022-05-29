const router = require('express').Router()
const registerController = require('../controllers/userController/registerController')
const loginController =require('../controllers/userController/loginController')
const isLoggedIn = require('../middlewares/isLoggedIn')

router.post('/register',registerController)
router.post('/login',loginController)





//POST =>'/register' =>req.body
//POST=>'/login' =>req.body
//POST=>'/fav/:id' =>req.params
//DELETE =>'/fav/:id' =>req.params
//GET =>'/checkAuth' =>req.headers



module.exports =router
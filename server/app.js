const express =require('express');
const app =express();
const dotenv =require('dotenv');
dotenv.config({path : './server/.env' });
//console.log(process.env)
const cors = require('cors')
const productRouter =require('./routes/productRouter')
const userRouter =require('./routes/userRouter')



//middlewares kontrollerden gecirizorum
app.use(cors())
//g;nderimleri body anlamizor bunu  icin azrica middler zaymak gerekizor
app.use(express.urlencoded({extend : false}))
//json dosyalerini okudugum yer
app.use(express.json())


require('./db/db')
app.use('/products',productRouter)
app.use('/user',userRouter)

module.exports=app
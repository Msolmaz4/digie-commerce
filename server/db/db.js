const mongoose = require('mongoose')


const main = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/eCommerce') // mongodb://ip:port/dbname
    .then(console.log('connect to the db success'))
    .catch(err => console.log(err))
}

main()
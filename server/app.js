const express =require('express');
const app =express();
const dotenv =require('dotenv');
dotenv.config({path : './server/.env' });
console.log(process.env)

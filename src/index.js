const express=require('express');
const apiRoutes=require('./routes')
const {ServerConfig} =require('./config');
const airports = require('./models/airports');


const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api',apiRoutes)
app.use('/flightService/api',apiRoutes)


app.listen(ServerConfig.PORT,()=>{
   console.log(`successfully server is running ${ServerConfig.PORT}`)   
})

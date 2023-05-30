const express=require('express');
const apiRoutes=require('./routes')
const {ServerConfig} =require('./config');
const airports = require('./models/airports');


const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)


app.listen(ServerConfig.PORT,()=>{
   console.log(`successfully server is running ${ServerConfig.PORT}`)
   // const {Airports,City}=require('./models');
   // const city=await City.findByPk(5);
   // console.log(city);
   
   // console.log(Airports);
  
   //  const newAirport=await city.createAirport({Name:'rajiv gandhi international airport',code:'GRA'})
   //  console.log(newAirport)
   //  const response =await city.getAirports();
   //  console.log(response);
   //  await City.destroy({
   //    where:{
   //       id:5
   //    }
   //  })
  
})

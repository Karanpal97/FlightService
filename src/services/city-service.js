const {StatusCodes}=require("http-status-codes")


const {CityRepositery}=require("../repositories");
const  AppError = require("../utils/errors/app-error");


const cityRepositery= new CityRepositery();
 

async function createCities(data){
   try{
      const city=await cityRepositery.create(data);
      return city;
   }
   catch(error){
  
    if(error.name=='SequelizeValidationError' || error.name=='SequelizeUniqueConstrainError'){
       let explanation =[]
       error.errors.forEach((err)=>{
          explanation.push(err.message);
         
       })
       throw new AppError(explanation, StatusCodes.BAD_REQUEST)
    }
    throw new AppError("connot create the city object", StatusCodes.INTERNAL_SERVER_ERROR)
   }
 }


 module.exports={createCities}
const {StatusCodes}=require("http-status-codes")


const {AirportRepositery}=require("../repositories");
const  AppError = require("../utils/errors/app-error");


const airportRepositery= new AirportRepositery();
 

async function createAirport(data){
  try{
     const airport=await airportRepositery.create(data);
     return airport;
  }
  catch(error){
 
   if(error.name=='SequelizeValidationError'){
      let explanation =[]
      error.errors.forEach((err)=>{
         explanation.push(err.message);
        
      })
      throw new AppError(explanation, StatusCodes.BAD_REQUEST)
   }
   throw new AppError("connot create the airport object", StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirports(){
   try{const airports=await airportRepositery.getAll();
   return airports}
   catch(error){
    
      throw new AppError('connot fetch all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function getAirport(id){
   try{
      const airport=await airportRepositery.get(id)
      return airport
   }
   catch(error){
      if(error.statusCode==StatusCodes.NOT_FOUND){
         throw new AppError('The Airplane you requested not found',error.statusCode)
      }
      throw new AppError('connot fetch the airport by id', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function destroyAirport(id){
   try{const response=await airportRepositery.destroy(id);
   return response}
   catch(error){
      if(error.statusCode==StatusCodes.NOT_FOUND){
         throw new AppError('The Airplane you requested to delete not found',error.statusCode)
      }
      throw new AppError('connot delete the airport', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function updateAirport(id){
   try{const response=await airportRepositery.upDate(id);
   return response}
   catch(error){
      if(error.statusCode==StatusCodes.NOT_FOUND){
         throw new AppError('The Airplane you requested to delete not found',error.statusCode)
      }
      throw new AppError('connot delete the airport', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

module.exports={
   createAirport,
   getAirport,
   getAirports,
   destroyAirport,
   updateAirport
}
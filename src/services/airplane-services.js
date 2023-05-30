const {StatusCodes}=require("http-status-codes")


const {AirplaneRepositery}=require("../repositories");
const  AppError = require("../utils/errors/app-error");


const airplaneRepositery= new AirplaneRepositery();
 

async function createAirplane(data){
  try{
     const airplane=await airplaneRepositery.create(data);
     return airplane;
  }
  catch(error){
 
   if(error.name=='SequelizeValidationError'){
      let explanation =[]
      error.errors.forEach((err)=>{
         explanation.push(err.message);
        
      })
      throw new AppError(explanation, StatusCodes.BAD_REQUEST)
   }
   throw new AppError("connot create the airplane object", StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirplanes(){
   try{const airplanes=await airplaneRepositery.getAll();
   return airplanes}
   catch(error){
    
      throw new AppError('connot fetch all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function getAirplane(id){
   try{
      const airplane=await airplaneRepositery.get(id)
      return airplane
   }
   catch(error){
      if(error.statusCode==StatusCodes.NOT_FOUND){
         throw new AppError('The Airplane you requested not found',error.statusCode)
      }
      throw new AppError('connot fetch all the airplanes by id', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function destroyAirplane(id){
   try{const response=await airplaneRepositery.destroy(id);
   return response}
   catch(error){
      if(error.statusCode==StatusCodes.NOT_FOUND){
         throw new AppError('The Airplane you requested to delete not found',error.statusCode)
      }
      throw new AppError('connot delete the airplane', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function updateAirplane(id){
   try{const response=await airplaneRepositery.upDate(id);
   return response}
   catch(error){
      if(error.statusCode==StatusCodes.NOT_FOUND){
         throw new AppError('The Airplane you requested to delete not found',error.statusCode)
      }
      throw new AppError('connot delete the airplane', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

module.exports={
   createAirplane,
   getAirplanes,
   getAirplane,
   destroyAirplane,updateAirplane
}
const {StatusCodes}=require('http-status-codes');

const {ErrorResponse,SuccessResponse}=require("../utils/common")


const {AirportService}=require("../services");



async function createAirport(req,res){
   try{
     const airport= await AirportService.createAirport({
      Name:req.body.Name,
      code:req.body.code,
      cityId:req.body.cityId

     });
      SuccessResponse.data=airport;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
   }
   catch(error){

    ErrorResponse.error=error;
    return res
            .status(error.statusCode )
            .json(ErrorResponse)

   }
} 

async function getAirports(req,res){
   try{
      const airports=await AirportService.getAirports();
      SuccessResponse.data=airports;
      return res
          .status(StatusCodes.OK)
          .json(SuccessResponse)

   }
   catch(error){
      ErrorResponse.error=error;
      return res
              .status(error.statusCode )
              .json(ErrorResponse)
   }
}
async function getAirport(req,res){
   try{
      const airport=await AirportService.getAirport(req.params.id);
      SuccessResponse.data=airport;
      return res
          .status(StatusCodes.OK)
          .json(SuccessResponse)

   }
   catch(error){
      ErrorResponse.error=error;
      return res
              .status(error.statusCode )
              .json(ErrorResponse)
   }
}


async function deleteAirport(req,res){
   try{
      const airport=await AirportService.destroyAirport(req.params.id);
      SuccessResponse.data=airport;
      return res
          .status(StatusCodes.OK)
          .json(SuccessResponse)

   }
   catch(error){
      ErrorResponse.error=error;
      return res
              .status(error.statusCode )
              .json(ErrorResponse)
   }
}

async function updateAirport(req,res){
   try{
      const airport=await AirplaneService.updateAirport();
      SuccessResponse.data=airport;
      return res
          .status(StatusCodes.OK)
          .json(SuccessResponse)

   }
   catch(error){
      ErrorResponse.error=error;
      return res
              .status(error.statusCode )
              .json(ErrorResponse)
   }
}

module.exports={
   createAirport,
   getAirports,
   getAirport,
   deleteAirport,
   updateAirport
}
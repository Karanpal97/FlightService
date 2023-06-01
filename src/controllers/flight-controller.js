const {StatusCodes}=require('http-status-codes');

const {ErrorResponse,SuccessResponse}=require("../utils/common")


const {FlightsService}=require("../services");




async function createFlight(req,res){
   try{
     const flights= await FlightsService.createFlight({
      flightNumber:req.body.flightNumber,
      airplaneId:req.body.airplaneId,
      departureAirportId:req.body.departureAirportId,
      arrivalAirportId:req.body.arrivalAirportId,
      arrivalTime:req.body.arrivalTime,
      departureTime:req.body.departureTime ,
      price:req.body.price,
      boardingGate:req.body.boardingGate,
      totalSeats:req.body.totalSeats,
      
     })
   
      SuccessResponse.data=flights;
   
       console.log(flights)
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




async function getAllFlights(req,res){
  

   try{
   
          const flight=await FlightsService.getAllFlights(req.query);
          SuccessResponse.data=flight;
        
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
module.exports={
createFlight,
getAllFlights
}
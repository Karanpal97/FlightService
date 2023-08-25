const {StatusCodes}=require("http-status-codes")
const{Op}=require('sequelize');

const { FlightsRepositery}=require("../repositories");
const  AppError = require("../utils/errors/app-error");



 const flightRepository=new FlightsRepositery();

async function createFlight(data){
  try{
     const flight=await flightRepository.create(data);
   
     return flight;
  }
  catch(error){
    console.log(error)
   if(error.name=='SequelizeValidationError'){
      let explanation =[]
      error.errors.forEach((err)=>{
         explanation.push(err.message);
        
      })
      throw new AppError(explanation, StatusCodes.BAD_REQUEST)
   }
   throw new AppError("connot create the flights object", StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAllFlights(query){
   let customFilter={};
   let sortFilter=[];
   const endingTripDate=' 23:59:00'
   if(query.trips){
      [departureAirportId,arrivalAirportId]=query.trips.split("-");
      customFilter.departureAirportId=departureAirportId ;
      customFilter.arrivalAirportId=arrivalAirportId
   }
   if(query.price){
      [minPrice,maxPrice]=query.price.split("-");
       customFilter.price={
         [Op.between]:[minPrice,((maxPrice==undefined)?20000:maxPrice)]
       }
   }
   if(query.travellers){
      customFilter.totalSeats={
         [Op.gte]:query.travellers
      }
   }
   if(query.tripDate){
      customFilter.departureTime={
         [Op.between]:[query.tripDate,query.tripDate+endingTripDate]
      }
   
   }
   if(query.sort){
      const params=query.sort.split(',');
      const sortFilters=params.map((param)=>param.split('_'))
      sortFilter=sortFilters
   }
 
   try{
      const flights=await flightRepository.getAllFlights(customFilter,sortFilter);
      console.log(customFilter)
      return flights;
   }
   catch(error){
      
      throw new AppError('Cannot fetch s data of all the flights',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


async function getFlight(id){
   try{
      const flight=await flightRepository.get(id)
      return flight
   }
   catch(error){
      if(error.statusCode==StatusCodes.NOT_FOUND){
         throw new AppError('The flight you requested not found',error.statusCode)
      }
      throw new AppError('connot fetch the flight by id', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function updateSeats(data){
   try{
      const response=await flightRepository.updateRemainSeats(data.flightId,data.seats,data.dec)
      return response
   }
   catch(error){
       console.log(error)
      throw new AppError('connot update the data of flight', StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

module.exports={createFlight,
getAllFlights,
getFlight,
updateSeats

}
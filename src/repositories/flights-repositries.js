const {Sequelize,Op}=require("sequelize")
const CrudRepositery=require("./crud-repositries");
const {flights,Airplane,Airports,City}=require("../models")
class FlightRepository extends CrudRepositery{
   constructor(){
      super(flights);
   }
  
async getAllFlights(filter,sort){
   const response=await flights.findAll({
      where:filter,
      order:sort,
   include:[
       {
          model:Airplane,
          required:true,
          as:'airplane_detail'
         },
       
      {
      model:Airports,
       required:true,
      as:'departure_Airport',
       on:{
        col1:Sequelize.where(Sequelize.col("flights.departureAirportId"),"=",Sequelize.col("departure_Airport.code"))
        },
      include:{
       model:City,
       required:true
      }


      }, 

        {
        model:Airports,
       required:true,
        as:'arrival_Airport',
        on:{
       col1:Sequelize.where(Sequelize.col("flights.arrivalAirportId"),"=",Sequelize.col("arrival_Airport.code"))
        },
        include:{
         model:City,
         required:true
        }
      
      } 
       
     ],
   })
   return response;
}
}






module.exports=FlightRepository;
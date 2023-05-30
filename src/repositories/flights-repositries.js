const {Sequelize,Op}=require("sequelize")
const CrudRepositery=require("./crud-repositries");
const {flights,Airplane,Airports}=require("../models")
class FlightRepository extends CrudRepositery{
   constructor(){
      super(flights);
   }
  
async getAllFlights(filter,sort){
   const response=await flights.findAll({
      where:filter,
      order:sort,
       include:[
        // {
      //    model:Airplane,
      //    required:true
      // },
    {
         model:Airplane,
         required:true,
         on:{
         col1:Sequelize.where(Sequelize.col("Airplane.id"),"=",Sequelize.col("flights.airplaneId"))
         }
   },

   {
      model:Airports,
      required:true,
      on:{
      col1:Sequelize.where(Sequelize.col("Airports.code"),"=",Sequelize.col("flights.departureAirportId"))
      }
}
]   


    


 
      
   });
  
   console.log(response)
   return response;
   
}
}






module.exports=FlightRepository;
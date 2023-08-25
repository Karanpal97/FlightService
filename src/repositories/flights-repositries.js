const {Sequelize,Op}=require("sequelize")
const CrudRepositery=require("./crud-repositries");
const {flights,Airplane,Airports,City}=require("../models")
const db=require("../models")
const {addRowLockOnFlights}=require('./queries')
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

async updateRemainSeats(flightId,seats,dec=true){
   const flight=await flights.findByPk(flightId)
   const transaction= await db.sequelize.transaction();
   await db.sequelize.query(addRowLockOnFlights(flightId))

   if(+dec){
           const response=await flight.decrement ('totalSeats',{by:seats},{transaction:transaction})
           return response
   }
   else{
    const response=await flight.increment('totalSeats',{by:seats},{transaction:transaction})
    return response    
   }
 }
}









module.exports=FlightRepository;
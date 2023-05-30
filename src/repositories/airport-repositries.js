const CrudRepositery=require("./crud-repositries");
const {Airports}=require("../models")
class AirportRepositery extends CrudRepositery{
   constructor(){
      super(Airports);
   }
}


module.exports=AirportRepositery;
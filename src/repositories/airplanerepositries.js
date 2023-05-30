const CrudRepositery=require("./crud-repositries");
const {Airplane}=require("../models")
class AirplaneRepositery extends CrudRepositery{
   constructor(){
      super(Airplane);
   }
}


module.exports=AirplaneRepositery;
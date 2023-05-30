const CrudRepositery=require("./crud-repositries");
const {City}=require("../models")
class CityRepositery extends CrudRepositery{
   constructor(){
      super(City);
   }
}


module.exports=CityRepositery
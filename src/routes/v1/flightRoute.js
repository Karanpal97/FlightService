const express=require("express");
const { FlightMiddlewares}=require("../../middlewares")

const {FlightController}=require("../../controllers");
const router=express.Router();


router.post('/',
            FlightMiddlewares.validCreateRequest,
           FlightController.createFlight);
 
router.get('/',
      
        FlightController.getAllFlights);


 module.exports=router;      
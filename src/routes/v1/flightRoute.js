const express=require("express");
const { FlightMiddlewares}=require("../../middlewares")

const {FlightController}=require("../../controllers");
const router=express.Router();


router.post('/',
            FlightMiddlewares.validCreateRequest,
           FlightController.createFlight);
 
router.get('/',
      
        FlightController.getAllFlights);

        router.get('/:id',
      
        FlightController.getFlight);

        
        router.patch('/:id/seats',
        FlightMiddlewares.validateUpdateRequest,
      
        FlightController.updateFlight);


 module.exports=router;      
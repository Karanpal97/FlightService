const express=require("express");
const { AirportMiddlewares}=require("../../middlewares")

const {AirportController}=require("../../controllers");
const router=express.Router();


router.post('/',
            AirportMiddlewares.validCreateRequest,
           AirportController.createAirport);
router.get('/',
         
           AirportController.getAirports);

 router.get('/:id',
         
           AirportController.getAirport);

           router.delete('/:id',
         
           AirportController.deleteAirport);

           
           router.patch('/:id',
         
           AirportController.updateAirport);


module.exports=router;
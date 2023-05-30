const express=require("express");
const { AirplaneMiddlewares}=require("../../middlewares")

const {AirplaneController}=require("../../controllers");
const router=express.Router();


router.post('/',
            AirplaneMiddlewares.validCreateRequest,
           AirplaneController.createAirplane);
router.get('/',
         
           AirplaneController.getAirplanes);

 router.get('/:id',
         
           AirplaneController.getAirplane);

           router.delete('/:id',
         
           AirplaneController.deleteAirplane);

           
           router.patch('/:id',
         
           AirplaneController.updateAirplane);


module.exports=router;
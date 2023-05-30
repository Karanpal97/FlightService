const express=require('express');
const { Infocontroller } = require('../../controllers');

const airplaneRoutes=require("./airplaneRoute")
const cityRoutes=require("./cityRoute")
const airportRoutes=require("./airportRoute")
const flightRoutes=require("./flightRoute")

const router=express.Router();


router.use("/airplanes",airplaneRoutes)
router.use("/cities",cityRoutes)
router.use("/airports",airportRoutes)
router.use("/flights",flightRoutes)

router.get('/info',Infocontroller.info)

module.exports=router;


function addRowLockOnFlights(flightId){
     return (`select * from flights where flights.Id=${flightId} for update`)
}
module.exports={
   addRowLockOnFlights
}
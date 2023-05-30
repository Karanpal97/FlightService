const {StatusCodes}=require('http-status-codes');

const {ErrorResponse}=require('../utils/common')


function validCreateRequest(req,res,next){
   if(!req.body.modelName){
      ErrorResponse.message='something went wrong  while creating airplane'
      ErrorResponse.error={explanation:'Model Number not found in the oncomming request in the current form'}
      return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next();
}



module.exports={validCreateRequest
};
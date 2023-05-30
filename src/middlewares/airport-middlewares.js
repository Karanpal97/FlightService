const {StatusCodes}=require('http-status-codes');

const {ErrorResponse}=require('../utils/common')


function validCreateRequest(req,res,next){
   if(!req.body.Name){
      ErrorResponse.message='something went wrong  while creating airport'
      ErrorResponse.error={explanation:'Name not found in the oncomming request in the current form'}
      return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   

   if(!req.body.code){
      ErrorResponse.message='something went wrong  while creating airport'
      ErrorResponse.error={explanation:'code not found in the oncomming request in the current form'}
      return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   
   if(!req.body.cityId){
      ErrorResponse.message='something went wrong  while creating airport'
      ErrorResponse.error={explanation:'cityId not found in the oncomming request in the current form'}
      return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next();
}

module.exports={validCreateRequest
};
const {logger}=require("../config");
const {StatusCodes}=require('http-status-codes');
const AppError = require("../utils/errors/app-error");
class CrudRepositery{
   constructor(model){
      this.model=model;
   }


   async create(data){

         const response=await this.model.create(data);
         return response;
   }


   async destroy(data){
  
         const response=await this.model.destroy({
            where:{
               id:data
            }
            
         }
         );
         if(!response){
            throw new AppError('Not able to delete the resource',StatusCodes.NOT_FOUND)
         }
         return response;}
    


    
   async get(data){
      
         const response=await this.model.findByPk(data); 
         if(!response){
            throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND)
         }
         return response;

     
   }

   async getAll(){
   
         const response=await this.model.findAll();
        
           
         return response;  
   }
   

   async upDate(id,data){
   
         const response=await this.model.update(data,{
            where:{
               id:id
            }
         });
           
         return response;

      }
   
}

module.exports=CrudRepositery;
const {status_code}=require("http-status-codes");

const info=(req,res)=>{
   return res.json({
      success:true,
      message:'api is live',
      data:{},
      error:{},

   })
}
module.exports={
   info
}
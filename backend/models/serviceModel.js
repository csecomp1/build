const mongoose=require("mongoose");
const serviceSchema=mongoose.Schema({
    sName:{type:String,required:true},
    sdesc:{type:String,required:true},
    bid:{type:mongoose.Schema.Types.ObjectId,required:true}
})
const serviceModel=mongoose.model("service",serviceSchema);
module.exports=serviceModel;

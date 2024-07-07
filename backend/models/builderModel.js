const mongoose=require("mongoose");
const builderSchema=mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String ,required:true},
    companyName:{type:String,required:true},
    contactNumber:{type:String,required:true},
  /*  address:{type:String,required:true},
    services:{type:mongoose.Schema.Types.ObjectId,ref:"Services"},
    testimonials:{type:mongoose.Schema.Types.ObjectId ,ref:"Testimonials"},*/
    
})
const builderModel=mongoose.model("builder",builderSchema);
module.exports=builderModel;
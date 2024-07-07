const mongoose=require("mongoose");
const testimonialSchema=mongoose.Schema({
    tName:{type:String,required:true},
    tdesc:{type:String,required:true},
    bid:{type:mongoose.Schema.Types.ObjectId,required:true}
})
const testimonialModel=mongoose.model("testimonial",testimonialSchema);
module.exports=testimonialModel;
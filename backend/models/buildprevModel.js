const mongoose=require("mongoose");
const buildprevSchema=mongoose.Schema({
    imageURL:{type:[String],required:true},
    bid:{type:mongoose.Schema.Types.ObjectId,required:true}
})
const buildprevModel=mongoose.model("builderprev",buildprevSchema);
module.exports=buildprevModel;
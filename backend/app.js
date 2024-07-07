const express=require("express");
const bodyParser=require("body-parser")
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const builderModel=require("./models/builderModel");
const serviceModel = require("./models/serviceModel");
const testimonialModel = require("./models/testimonialModel");
const jwt=require("jsonwebtoken");
const buildprevModel = require("./models/buildprevModel");
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json())

mongoose.connect("mongodb+srv+://csecomppooja:csecomp2025@coders.vzwekf3.mongodb.net/coders?retryWrites=true&w=majority&appName=coders")
app.post("/builder",async(req,res)=>{
    const {username,password,companyName,contactNumber}=req.body;
    const builder=await builderModel.findOne({username:username})
    
    if(builder){
       return res.json({message:"user already exists"})
    }
    
    const newbuilder=new builderModel({username,password,companyName,contactNumber})
    await newbuilder.save()
    res.json({message:"builder registered successfully"})
})
app.get("/builder",async (req,res)=>{
    try{
        const response=await builderModel.find({});
        return res.json(response);
    }
    catch(err){
        return res.json(err)
    }
})
app.post("/builder/login",async(req,res)=>{
    const {username,password}=req.body;
    const user=await builderModel.findOne({username:username})
    
    if(!user){
        return res.json({message:"user does not exsists"});
    }
    
    if(password!=user.password){
        return res.json({message:"username or password is Incorrect"});
    }
    const token=jwt.sign({id:user._id},"secret")
    return res.json({token,builderID:user._id})
})
app.post("/services",async(req,res)=>{
    const {sName,sdesc,bid}=req.body;
    const service=new serviceModel({sName,sdesc,bid});
    await service.save();
    res.json("service created")
})

app.get("/services/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const services=await serviceModel.find({bid:id});
        return  res.json(services);
    }
    catch(err){
        return res.json(err);
    }
})
app.get("/services",async(req,res)=>{
    try{
        const services=await serviceModel.find({});
        res.json(services);
    }
    catch(err){
        res.json(err)
    }
})
app.post("/testimonial",async(req,res)=>{
    const {tName,tdesc,bid}=req.body;
    const test=new testimonialModel({tName,tdesc,bid});
    await test.save();
    res.json("testimonial created")
})

app.get("/testimonial/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const test=await testimonialModel.find({bid:id});
        res.json(test);
    }
    catch(err){
        res.json(err);
    }
})
app.get("/testimonial",async(req,res)=>{
    try{
        const test=await testimonialModel.find({});
        res.json(test);
    }
    catch(err){
        res.json(err)
    }
})
app.post("/imagepost",async(req,res)=>{
    const {imageURL,bid}=req.body;
    const buildprev=new buildprevModel({imageURL,bid});
    await buildprev.save()
    res.json("image saved")
})
app.get("/previmage/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const test=await buildprevModel.find({bid:id});
        res.json(test);
    }
    catch(err){
        res.json(err);
    }
})
app.listen(3500,()=>{
    console.log("Listening");
})
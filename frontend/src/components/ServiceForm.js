import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ServiceForm = () => {
    const [sname,setsname]=useState('');
    const [sdesc,setsdesc]=useState('');  
    const navigate=useNavigate();
    const submitHandler=async(e)=>{
      e.preventDefault();
      const bid=localStorage.getItem("builderID");
      const res=await  axios.post("http://localhost:3500/services",{sName:sname,sdesc,bid});
      
      alert("Uploaded")
      navigate("/")
    }
  
    return (
        <VStack backgroundColor={"brown"} width="500px" marginLeft="500px" marginTop="50px" padding="20px" >
         
        <FormControl id='sname' color='white'  isRequired>
           <FormLabel>Service name</FormLabel>
               <Input
               color='white'
               placeholder='Enter your service name'
               onChange={(e)=>{setsname(e.target.value)}}
               />
        </FormControl>
        <FormControl id='sdesc' color='white'  isRequired>
           <FormLabel>Service description</FormLabel>
              
              <Input
               color='white'
               placeholder='Enter service description'
               onChange={(e)=>{setsdesc(e.target.value)}}
               
               />
               
        </FormControl>
         <Button marginTop="20px" onClick={submitHandler}>Add </Button>
     </VStack>    
    )
}

export default ServiceForm
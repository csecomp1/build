import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TestimonialForm = () => {
    const [tname,settname]=useState('');
    const [tdesc,settdesc]=useState('');
    const navigate=useNavigate();
    const submitHandler=async(e)=>{
      e.preventDefault();
      const bid=localStorage.getItem("builderID");
      const r=await axios.post("http://localhost:3500/testimonial",{tName:tname,tdesc,bid}); 
      alert("Uploaded")
      navigate("/")
    }
  
  return (
    <VStack backgroundColor={"brown"} width="500px" marginLeft="500px" marginTop="50px" padding="20px" >
 <FormControl id='tname' color='white'  isRequired>
       <FormLabel>Testimonial </FormLabel>
           <Input
           color='white'
           placeholder='Enter your Testimonial'
           onChange={(e)=>{settname(e.target.value)}}
           />
    </FormControl>
    <FormControl id='tdesc' color='white'  isRequired>
       <FormLabel>Testimonial description</FormLabel>
          
          <Input
           color='white'
           placeholder='Enter description'
           onChange={(e)=>{settdesc(e.target.value)}}
           
           />
           
    </FormControl>
    <Button marginTop="20px" onClick={submitHandler}>Add </Button>

</VStack>
  )
}

export default TestimonialForm
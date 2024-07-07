import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [contact,setContact]=useState('')
    const [builder,setBuilder]=useState('')
    const navigate=useNavigate();
    const submitHandler=async(e)=>{
            e.preventDefault();
            const res=await  axios.post("http://localhost:3500/builder",{username:username,password:password,contactNumber:contact,companyName:builder})
            alert("Account created now Login")
            navigate('/login');
    }
  return (
    <div>
         <VStack backgroundColor={"brown"} width="500px" marginLeft="500px" marginTop="50px" padding="20px" >
         
         <FormControl id='username' color='white'  isRequired>
            <FormLabel>Username</FormLabel>
                <Input
                color='white'
                placeholder='Enter your mail id'
                onChange={(e)=>{setUsername(e.target.value)}}
                />
         </FormControl>
         <FormControl id='password' color='white'  isRequired>
            <FormLabel>Password</FormLabel>
               
               <Input
                color='white'
                placeholder='Enter your password'
                onChange={(e)=>{setPassword(e.target.value)}}
                
                />
                
         </FormControl>
         <FormControl id='contact' color='white'  isRequired>
            <FormLabel>Contact Number</FormLabel>
            <Input
                color='white'
                placeholder='Enter your phone number'
                onChange={(e)=>{setContact(e.target.value)}}
                />
         </FormControl>
         <FormControl id='builderName' color='white' isRequired>
            <FormLabel>Builder Name</FormLabel>
            <Input
                color='white'
                placeholder='Builder Company Name'
                onChange={(e)=>{setBuilder(e.target.value)}}
                />
         </FormControl>
         <Button marginTop="20px" onClick={submitHandler}>Create account</Button>
         
    </VStack>
    </div>
  )
}

export default Signup
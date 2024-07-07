
import React, { useState } from 'react'
import {useCookies} from 'react-cookie';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [_,setCookies]=useCookies(["access_token"])
    const navigate=useNavigate();
    const submitHandler=async()=>{
        const res=await axios.post("http://localhost:3500/builder/login",{username,password})
        window.localStorage.setItem("builderID",res.data.builderID);
        
        setCookies("access_token",res.data.token);
        
        alert("login successfull")
        navigate("/")
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
         <Button marginTop="20px" onClick={submitHandler}>Login</Button>
         </VStack>

    </div>
  )
}

export default Login
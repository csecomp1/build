import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Container, Input, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [builder,setbuilder]=useState([]);
    useEffect(()=>{
        const fetchBuild=async()=>{
            try{
            const response=await axios.get("http://localhost:3500/builder");
            
            setbuilder(response.data);
            
            }
            catch(err){
                console.log(err);
            }
        }
        fetchBuild();
    },[])
  return (
        <div className='outer'>
           
           {builder.map((m)=>{
            return( <Link to={"/builder/"+m._id} key={m._id}><div  className='box'  key={m._id} >
             
             <h>{m.companyName}</h>
             <p>{m.contactNumber}</p>
                 </div></Link>
           )
           })}
        </div>
           
       
  )
}

export default Home
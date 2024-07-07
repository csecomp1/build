import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Services from './Services';
import Testimonial from './Testimonial';
import PrevWork from './PrevWork';

const Builder = () => {
const [builder,setbuilder]=useState([]);

const [services,setServices]=useState([]);
const [testimonial,setTestimonial]=useState([]);
const [images,setImages]=useState([])
const {id}=useParams();
console.log(id)
useEffect(()=>{
    const fetchBuild=async()=>{
        try{
        const res=await axios.get("http://localhost:3500/builder");
        setbuilder(res.data);
        
        const serv=await axios.get("http://localhost:3500/services/"+id);
        setServices(serv.data);
        const test=await axios.get("http://localhost:3500/testimonial/"+id);
        setTestimonial(test.data);
        const prev=await axios.get("http://localhost:3500/previmage/"+id);
        
        const arr=[];
        for(let i=0;i<prev.data.length;i++){
          arr[i]=prev.data[i];
        }
        
        const v=[];
        let cnt=0;
        for(let i=0;i<arr.length;i++){
           for(let j=0;j<arr[i].imageURL.length;j++){
                v[cnt++]=arr[i].imageURL[j];
           }
        }
        console.log(v);
        setImages(v);
        console.log(services);
        console.log(testimonial);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchBuild();
},[])


  return (
    <div>
       {
        builder.map((m)=>{
            return<>{m._id===id && <div className='cname'><p className='comp'>{m.companyName}</p><p>{m.contactNumber}</p></div>
            }</>
        })

       }
       <Services services={services}/>
       <Testimonial testimonial={testimonial}/>
       <PrevWork  images={images}/>
    </div>
  )
}

export default Builder
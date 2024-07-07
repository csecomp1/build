import React, { useState } from 'react'
import convertToBase64 from '../helper/convertToBase64';
import axios from "axios"
const PreviousForm = () => {
    const [file,setFile]=useState();
   
    const handlechange=async e=>{
    
       /* const base64=await convertToBase64(e.target.files[0]);
        console.log(base64)*/
        setFile(e.target.files)
        
      }
      const onupload=async(e)=>{
        const formdata=[]
        for(let i=0;i<file.length;i++){
            const base64=await convertToBase64(file[i])
            formdata[i]=base64;
        }
        const bid=localStorage.getItem("builderID");
        const res=await  axios.post("http://localhost:3500/imagepost",{imageURL:formdata,bid});
        console.log(res.data)
    }
  return (
    <div>
       
        <input onChange={handlechange} type="file" multiple  id="prof" name='prof'/> 
        <button onClick={onupload}>Upload</button>
        
    </div>
  )
}

export default PreviousForm
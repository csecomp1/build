import React from 'react'

const PrevWork = ({images}) => {
  return (
    <>
    <h className='ph'>OUR PREVIOUS WORKS</h>
    {console.log(images)}
    <div className='pwork'>
        {images.map((m)=>{
           
            return (<img src={m}/>)
        })}
    </div></>
  )
}

export default PrevWork
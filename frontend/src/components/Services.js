import React from 'react'

const Services = ({services}) => {
  return (
    <><h className='sh'>OUR SERVICES</h>
    <div className='serv'>
         
         {
            services.map((m)=>{
                return (<div className='sbox'><h>{m.sName}</h><p>{m.sdesc}</p></div>)
            })
        }
    </div></>
  )
}

export default Services
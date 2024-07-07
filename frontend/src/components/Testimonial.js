import React from 'react'

const Testimonial = ({testimonial}) => {
  
  return (
    <> <h className='th'>WORDS FROM OUR VALUABLE CUSTOMERS</h>
    <div className='test'>
     
        {
            testimonial.map((m)=>{
                return (<div className='tbox'><h>{m.tName}</h><p>{m.tdesc}</p></div>)
            })
        }
    </div></>
  )
}

export default Testimonial
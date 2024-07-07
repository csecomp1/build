import React from 'react'
import { Link } from 'react-router-dom';


const Form = () => {
  return (
    <div >
          <Link to="serviceform"><div>Add service</div></Link>
          <Link to="testimonialform"><div>Add Testimonial</div></Link>
          <Link to="previousform"><div>Previous works</div></Link>
    </div>
  )
}

export default Form
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Navbar = () => {
  const [cookies,setCookies]=useCookies(["access_token"])
  const navigate=useNavigate();
  const logout=()=>{
    setCookies("access_token","")
    window.localStorage.removeItem("builderID");
    navigate("/")
  }
  return (
    <div className='nav'>
        <h><Link to="/">Builders Hub</Link></h>
       
        
        
         
        {!cookies.access_token?
        (<><Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link></>):(<><button onClick={logout}>Logout</button><Link to="/form">Add info</Link> </>)
        }
    </div>
  )
}

export default Navbar
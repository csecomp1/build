
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Builder from './components/Builder';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Form from './components/Form';
import ServiceForm from './components/ServiceForm';
import TestimonialForm from './components/TestimonialForm';
import PreviousForm from './components/PreviousForm';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes >
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="builder/:id" element={<Builder />}/>               
              </Route>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/form" >
              <Route index element={<Form/>}/>
              <Route path="serviceform" element={<ServiceForm/>}/>
              <Route path="testimonialform" element={<TestimonialForm/>}/>
              <Route path="previousform" element={<PreviousForm/>}/>
             </Route>
              
            
      </Routes>
    </div>
  );
}

export default App;

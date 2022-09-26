import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useLocation, Link} from 'react-router-dom'
const Putcustomer = () => {
     let data1 = useLocation();
    
    const [name, setName]= useState(null);
    const [email, setEmail]= useState(null);
    const [mobile, setMobile]= useState(null);
    const [data,setData]= useState([]);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5005/get/${data1.state}`)
        .then(res=>setData(res.data))
        .catch(err=>setData(err));

    },[]);
    

   const Finalsubmit=()=>{
    axios.put(`http://127.0.0.1:5005/update/${data1.state}`, {name, email, mobile})
    .then(alert('you are successfuly registered'))
    .catch(err=>err.send('registration failed'));
   }
    return (
        <div> 
            <form>   
            <h1>Registration Form for Customer</h1>
            Name: <input type="text" name="name" placeholder='Enter your Name' onChange={e=>setName(e.target.value)}/>
            <br/><br/>
             Email: <input type="email" name="email" placeholder='Enter your Email' onChange={e=>setEmail(e.target.value)}/>
             <br/><br/>
             Mobile: <input type="tel" name="phone" placeholder='Enter your Mobile No.' pattern='[0-9]{10}' onChange={e=>setMobile(e.target.value)}/>
             <br/><br/>
             <button type="submit" value="Submit" onClick={Finalsubmit}><Link to="/Getcustomer">Update</Link></button> 
             <button type="reset" value="Reset">Reset</button>
             </form>
             {data1.state}
        </div>
    );
};

export default Putcustomer;
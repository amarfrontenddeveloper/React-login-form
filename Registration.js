import axios from 'axios';
import React, { useState } from 'react';


const Registration = () => {

    const [name, setName]= useState(null);
    const [email, setEmail]= useState(null);
    const [mobile, setMobile]= useState(null);
    const [password, setPassword]= useState(null);
    const [cpassword, setCpassword]= useState(null);

   const Finalsubmit=()=>{
    axios.post('http://127.0.0.1:5005/post/data', {name, email, mobile, password, cpassword})
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
             Password: <input type="password" name="password" placeholder='Enter Password' onChange={e=>setPassword(e.target.value)}/>
             <br/><br/>
             Confirm Password: <input type="password" name="cpassword" placeholder='Enter Confirm Password' onChange={e=>setCpassword(e.target.value)}/>
             <br/><br/>
             <button type="submit" value="Submit" onClick={Finalsubmit}>Submit</button> 
             <button type="reset" value="Reset">Reset</button>
             </form>
        </div>
    );
};

export default Registration;
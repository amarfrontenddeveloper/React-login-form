import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Getcustomer = () => {

    const [data, setData]= useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:5005/get/customer')
        .then(res=>setData(res.data))
        .catch(err=>setData(err));

    },[]);
    if (!data) return null;
    return (
        <div>
            <table border={1}>
             <tr>
                <th>Id</th><th>Name</th><th>Email</th><th>Mobile</th><th>Password</th><th>Confirm Password</th>
                <th>Edit</th><th>Delete</th>
             </tr>
             {
                data.map((result,i)=><tr key={i}><td>{result._id}</td><td>{result.name}</td><td>{result.email}</td><td>{result.mobile}</td><td>{result.password}</td><td>{result.cpassword}</td><td><Link to="/Putcustomer" state={result._id}>edit</Link></td><td><Link to="/Deletedata" state={result._id}>Delete</Link></td></tr>)
               }
            </table>
        </div>
    );
};

export default Getcustomer;
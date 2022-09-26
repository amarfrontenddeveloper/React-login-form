import React, { useEffect, useState } from "react";
import axios from "axios";
//import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

const Deletedata = () => {
  let data1 = useLocation();

  const [data, setData] = useState([]);

  axios
    .delete(`http://127.0.0.1:5005/delete/${data1.state}`)
    .then(() => {
      alert("deleted");
      window.location = "/Getcustomer";
    })
    .catch((err) => setData(err));
};

export default Deletedata;

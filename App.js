
import './App.css';
import Getcustomer from './Getcustomer';
import Layout from './Layout';
import Putcustomer from './Putcustomer';
import Registration from './Registration';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Deletedata from './Deletedata';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Layout/>}>
      <Route  index element={<Registration/>}/>
      <Route  path='Registration' element={<Registration/>}/>

      <Route path= "Getcustomer" element={<Getcustomer/>}/>
      <Route path= "Putcustomer" element={<Putcustomer/>}/>
      <Route path= "Deletedata" element={<Deletedata/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

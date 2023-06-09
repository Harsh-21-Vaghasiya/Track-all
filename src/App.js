import React from "react";
import "./App.css";
import Slider from "./components/Slider";
import Ordered from "./components/Ordered/Ordered";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./components/Inventory/Inventory";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Resources from "./components/Resources/Resources";

import NotAccepted from './components/Ordered/NotAccepted';

import Singup from './components/Singup';
import { useEffect, useState } from "react";




function App() {
  const [login,setlogin]=useState(false);
  
  return (
    <>
    
    
    <Router>
        <div className="App">
          <Slider />
         
          <Routes>
            <Route path="dashboard" exact element={<Dashboard />}></Route>
            <Route path="ordered" element={<Ordered />}></Route>
            <Route path="inventory" element={<Inventory />}></Route>
            <Route path="Resources" element={<Resources />}></Route>
          </Routes>
        </div>
      </Router>

     {/* <Singup/> */}
     
     

      

      {/* <Ordered/> */}

      {/* <Pop/> */}
    </>
  );
}

export default App;

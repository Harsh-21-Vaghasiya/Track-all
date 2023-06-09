import React from "react";
import Detail from "./Detail";
import "./Ordered.css";
import { useEffect, useState } from "react";
import Zomato from "./Zomato";

function Ordered() {
  const mystyle = {
    margintop: "112px",
    marginleft: "261px",
  };

  
  
  
        
  

  return (
    <>
     
      <div className="maincontainer" style={mystyle}>
       
        

        <Detail />
      </div>
  
    </>
  );

  }
export default Ordered;

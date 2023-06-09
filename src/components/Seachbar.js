import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import "./Right.css";

function Right() {
  return (
    <>
      <div>
      <input type="text" placeholder="Search Name, Order ID or Items" />
      <button type="button" className="icon-button">
        <span className="material-icons">notifications</span>
      </button>
      {/* <button className="Login">Login</button> */}
    </div>
   
    </>
    
  );
}

export default Right;

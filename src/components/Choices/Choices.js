import React, { useState } from "react";
import "./Choices.css";
import { NavLink } from "react-router-dom";

function Choices() {
  return (
    <>
      <h3>What do you do?</h3>
      <NavLink to="/result">
        <button>Good Option Text</button>
      </NavLink>
      <NavLink to="/result">
        <button>Neutral Option Text</button>
      </NavLink>
      <NavLink to="/result">
        <button>Evil Option Text</button>
      </NavLink>
    
        <button>Consult The Cat Bible</button>
   
    </>
  );
}

export default Choices;

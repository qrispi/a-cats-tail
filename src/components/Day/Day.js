import React, { useState } from "react";
import "./Day.css";
import { NavLink } from "react-router-dom";

function Day() {
  return (
    <>
      <h2>DAY 1</h2>
      <p>Something, Something, Dark Side!</p>
      <NavLink to="/choices">
        <button>CONTINUE</button>
      </NavLink>
    </>
  );
}

export default Day;

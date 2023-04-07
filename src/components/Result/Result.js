import React, { useState } from "react";
import "./Result.css";
import { NavLink } from "react-router-dom";

function Result() {
  return (
    <>
      <p>You chose free buffet. You floofy loaf!</p>
      <NavLink to="/">
        <button>CONTINUE</button>
      </NavLink>
    </>
  );
};

export default Result;

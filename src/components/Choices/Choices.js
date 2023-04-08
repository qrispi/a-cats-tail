import React from "react";
import "./Choices.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Choices() {
  const dayNum = useSelector((state) => state.day.value);
  return (
    <>
      <h3>What do you do?</h3>
      <NavLink to={`/${dayNum}/result`}>
        <button>Good Option Text</button>
      </NavLink>
      <NavLink to={`/${dayNum}/result`}>
        <button>Neutral Option Text</button>
      </NavLink>
      <NavLink to={`/${dayNum}/result`}>
        <button>Evil Option Text</button>
      </NavLink>

      <button>Consult The Cat Bible</button>
    </>
  );
}

export default Choices;

import React from "react";
import "./Day.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Day() {
  const dayNum = useSelector((state) => state.day.value);
  return (
    <>
      <h2>DAY {dayNum}</h2>
      <p>Something, Something, Dark Side!</p>
      <NavLink to={`/${dayNum}/choices`}>
        <button>CONTINUE</button>
      </NavLink>
    </>
  );
}

export default Day;

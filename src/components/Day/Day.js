import React from "react";
import "./Day.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Day() {
  const dayNum = useSelector((state) => state.day.value);
  const story = useSelector((state) => state.storyline);
  const checkCatName = useSelector((state) => state.cat.name);

  return (
    <>
      <h2>DAY {dayNum}</h2>
      <p>Something, Something, Dark Side!</p>
      <NavLink to={`/story/${dayNum}/choices`}>
        <button>CONTINUE</button>
      </NavLink>
    </>
  );
}

export default Day;

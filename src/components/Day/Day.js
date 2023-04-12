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
      <h2>DAY {dayNum + 1}</h2>
      <p>{story[dayNum].story}</p>
      <NavLink to={`/story/${dayNum + 1}/choices`}>
        <button>CONTINUE</button>
      </NavLink>
    </>
  );
}

export default Day;

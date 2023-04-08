import React from "react";
import "./Result.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../features/daySlice";

function Result() {
  const dayNum = useSelector((state) => state.day.value);
  const dispatch = useDispatch();

  const getNextDay = dayNum < 7 ? `/${dayNum}/day` : "/finale";

  return (
    <>
      <p>Day {dayNum} results</p>
      <p>You chose free buffet. You floofy loaf!</p>
      <NavLink to={getNextDay}>
        <button onClick={() => dispatch(increment())}>CONTINUE</button>
      </NavLink>
    </>
  );
}

export default Result;

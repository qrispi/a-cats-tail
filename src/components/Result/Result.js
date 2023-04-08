import React, { useState } from "react";
import "./Result.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../features/daySlice";

function Result() {
  const dayNum = useSelector((state) => state.day.value);
  const dispatch = useDispatch();
  return (
    <>
      <p>Day {dayNum} results</p>
      <p>You chose free buffet. You floofy loaf!</p>
      <NavLink to={`/${dayNum}/day`}>
        <button onClick={() => dispatch(increment())}>CONTINUE</button>
      </NavLink>
    </>
  );
}

export default Result;

import React from "react";
import "./Choices.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCatMorality, decrementCatMorality } from "../../features/catSlice";

function Choices() {
  const dayNum = useSelector((state) => state.day.value);
  const dispatch = useDispatch();
  return (
    <>
      <h3>What do you do?</h3>
      <NavLink to={`/story/${dayNum}/result`}>
        <button onClick={() => dispatch(incrementCatMorality())}>Good Option Text</button>
      </NavLink>
      <NavLink to={`/story/${dayNum}/result`}>
        <button>Neutral Option Text</button>
      </NavLink>
      <NavLink to={`/story/${dayNum}/result`}>
        <button onClick={() => dispatch(decrementCatMorality())}>Evil Option Text</button>
      </NavLink>
      <NavLink to="/book">
        <button>Consult The Cat Fact Book</button>
      </NavLink>
    </>
  );
}

export default Choices;

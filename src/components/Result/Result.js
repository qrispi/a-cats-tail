import React from "react";
import "./Result.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../features/daySlice";

function Result({type}) {
  const dayNum = useSelector((state) => state.day.value);
  const catMorality = useSelector((state) => state.cat.morality);
  const story = useSelector((state) => state.storyline);
  const checkCatName = useSelector((state) => state.cat.name);
  const dispatch = useDispatch();

  const getNextDay = dayNum < 5 ? `/story/${dayNum + 1}/day` : "/story/finale";

  const getResult = (type) => {
    return `${type}Reaction`;
  }

  return (
    <>
      <p>{story[dayNum][getResult(type)]}</p>
      <p>Cat's Morality is {catMorality}</p>
      <NavLink to={getNextDay}>
        <button onClick={() => dispatch(increment())}>CONTINUE</button>
      </NavLink>
    </>
  );
}

export default Result;

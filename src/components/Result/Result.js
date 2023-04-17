import React from "react";
import PropTypes from "prop-types"
import "./Result.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../features/daySlice";

function Result({type}) {
  const dayNum = useSelector((state) => state.day.value);
  const story = useSelector((state) => state.storyline);
  const dispatch = useDispatch();

  const getNextDay = dayNum < 5 ? `/story/${dayNum + 1}/day` : "/story/";

  const getResult = (type) => {
    return `${type}Reaction`;
  }

  return (
    <div className="result-container">
      <p className="result-text">{story[dayNum][getResult(type)]}</p>
      <NavLink to={getNextDay}>
        <button 
          className="blue-button"
          onClick={() => dispatch(increment())}>
          CONTINUE
        </button>
      </NavLink>
    </div>
  );
}

export default Result;

Result.propTypes = {
  type: PropTypes.string.isRequired
};
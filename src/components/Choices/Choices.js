import React from "react";
import "./Choices.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCatMorality, decrementCatMorality } from "../../features/catSlice";

function Choices() {
  const dayNum = useSelector((state) => state.day.value);
  const story = useSelector((state) => state.storyline);
  const dispatch = useDispatch();
  
  return (
    <>
      <h3 className="choice-title">What do you do?</h3>
      <div className="choice-btns-container">
        <NavLink to={`/story/${dayNum + 1}/result/good`}>
          <button
            className="yellow-button"
            onClick={() => dispatch(incrementCatMorality())}
          >
            {story[dayNum].goodChoice}
          </button>
        </NavLink>
        <NavLink to={`/story/${dayNum + 1}/result/neutral`}>
          <button className="yellow-button">{story[dayNum].neutralChoice}</button>
        </NavLink>
        <NavLink to={`/story/${dayNum + 1}/result/evil`}>
          <button
            className="yellow-button"
            onClick={() => dispatch(decrementCatMorality())}
          >
            {story[dayNum].evilChoice}
          </button>
        </NavLink>
        <NavLink to="/book">
          <button className="dark-blue-button">CONSULT THE BOOK OF CAT</button>
        </NavLink>
      </div>
    </>
  );
}

export default Choices;

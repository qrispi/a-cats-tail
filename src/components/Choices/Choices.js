import React from "react";
import "./Choices.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCatMorality,
  decrementCatMorality,
} from "../../features/catSlice";

function Choices() {
  const dayNum = useSelector((state) => state.day.value);
  const story = useSelector((state) => state.storyline);
  const checkCatName = useSelector((state) => state.cat.name);
  const dispatch = useDispatch();
  return (
    <>
      <h3>What do you do?</h3>
      <div className="choice-btns-container">
        <NavLink to={`/story/${dayNum + 1}/result/good`}>
          <button
            id="goodButton"
            onClick={() => dispatch(incrementCatMorality())}
          >
            {story[dayNum].goodChoice}
          </button>
        </NavLink>
        <NavLink to={`/story/${dayNum + 1}/result/neutral`}>
          <button id="neutralButton">{story[dayNum].neutralChoice}</button>
        </NavLink>
        <NavLink to={`/story/${dayNum + 1}/result/evil`}>
          <button
            id="evilButton"
            onClick={() => dispatch(decrementCatMorality())}
          >
            {story[dayNum].evilChoice}
          </button>
        </NavLink>
        <NavLink to="/book">
          <button>Consult The Cat Fact Book</button>
        </NavLink>
      </div>
    </>
  );
}

export default Choices;

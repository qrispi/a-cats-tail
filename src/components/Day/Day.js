import React, {useEffect, useState} from "react";
import "./Day.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Day() {
  const dayNum = useSelector((state) => state.day.value);
  const story = useSelector((state) => state.storyline);
  const [dayAnimations, setDayAnimations] = useState(<img src={require("../../images/day-night.gif")} style={{ height: 150 }} alt="Day Cycle" />)

  useEffect(() => {
    getDayAnimation()
  }, [])

  const getDayAnimation = () => {
      setTimeout(() => {
        setDayAnimations(<img style={{ height: 150 }}/>)
      }, 3200);
  }

  
  return (
    <>
      <h2 className="day-text">DAY {dayNum + 1}</h2>
      {dayAnimations}
      <p className="story-text">{story[dayNum].story}</p>
      <NavLink to={`/story/${dayNum + 1}/choices`}>
        <button
          className="blue-button">
          CONTINUE
        </button>
      </NavLink>
    </>
  );
}

export default Day;

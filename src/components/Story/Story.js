import React from "react";
import "./Story.css";
import Day from "../Day/Day";
import Choices from "../Choices/Choices";
import Result from "../Result/Result";
import { Switch, Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Story() {
  const dayNum = useSelector((state) => state.day.value);
  return (
    // <div className='intro'>
    //     <h2>Congrats, you adopted a cat!</h2>
    //     <form className='name-form'>
    //         <label htmlFor="nameInput" className='top-margin'>What's your cat's name?</label>
    //         <input type="text" id="nameInput" className='top-margin' required/>
    //         <button className='top-margin'>Continue</button>
    //     </form>
    // </div>
    <>
      {/* <Switch> */}
      <Route exact path="/">
        <NavLink to={`/${dayNum}/day`}>
          <button>Continue</button>
        </NavLink>
      </Route>
      <Route path="/:dayNum/day">
        <Day />
      </Route>
      <Route path="/:dayNum/choices">
        <Choices />
      </Route>
      <Route path="/:dayNum/result">
        <Result />
      </Route>
      {/* </Switch> */}
    </>
  );
}

export default Story;

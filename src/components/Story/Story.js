import React, { useState } from "react";
import "./Story.css";
import Day from "../Day/Day";
import Choices from "../Choices/Choices";
import Result from "../Result/Result";
import { Switch, Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCatName } from "../../features/catSlice";
import Finale from "../Finale/Finale";

function Story() {
  const dayNum = useSelector((state) => state.day.value);
  // const checkCatName = useSelector((state) => state.cat.name);
  const story = useSelector((state) => state.storyline);
  const [catName, setCatName] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      {/* <div className='intro'>
        <h2>Congrats, you adopted a cat!</h2>
        <form className='name-form'>
            <label htmlFor="nameInput" className='top-margin'>What's your cat's name?</label>
            <input type="text" value={catName} onChange={(event) => setCatName(event.target.value)} id="nameInput" className='top-margin' required/>
            <button className='top-margin' onClick={(event) => {
                event.preventDefault() 
                dispatch(updateCatName(catName))}}>Submit Name</button>
        </form>
    </div> */}

      <Switch>
        <Route exact path="/story">
          {dayNum < 5 && (
            <NavLink to={`/story/${dayNum}/day`}>
              <button>Continue</button>
            </NavLink>
          )}
          {dayNum > 5 && (
            <>
              <p>
                Wow what a week! Frankly, youre exhausted and have no idea what
                to expect next. As you get out of bed and head into the kitchen
                you see Fluffy already sitting there, waiting for you. It looks
                like they have something important to say...
              </p>

              <NavLink to={`/story/finale/`}>
                <button>Let's find out!</button>
              </NavLink>
            </>
          )}
        </Route>
        <Route path="/story/:dayNum/day">
          <Day />
        </Route>
        <Route path="/story/:dayNum/choices">
          <Choices />
        </Route>
        <Route
          path="/story/:dayNum/result/:type"
          render={({ match }) => <Result type={match.params.type} />}
        />

        <Route exact path="/story/finale">
          <Finale />
        </Route>
      </Switch>
    </>
  );
}

export default Story;

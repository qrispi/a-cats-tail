import React, { useState } from "react";
import "./Story.css";
import Day from "../Day/Day";
import Choices from "../Choices/Choices";
import Result from "../Result/Result";
import { Switch, Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCatName } from "../../features/catSlice";
import { addName } from "../../features/storySlice";

function Story() {
  const dayNum = useSelector((state) => state.day.value);
  const story = useSelector((state) => state.storyline);
  const [ catName, setCatName ] = useState('');
  const dispatch = useDispatch();

  const replace = (obj) => {
    const keys = Object.keys(obj)
    return keys.reduce((acc, cV) => {
      acc[cV] = obj[cV].replaceAll('replaceME', catName)
      return acc
    }, {})
  }

  const startStory = (event) => {
    if(catName) {
      event.preventDefault()
      dispatch(updateCatName(catName))
      const replaceAll = story.reduce((acc, cV) => {
        acc.push(replace(cV))
        return acc
      }, [])
      dispatch(addName(replaceAll))
    }
  }

  return (
    <>
      <Switch>
        <Route exact path="/story">
        {dayNum < 5 && (
          <div className='intro'>
              <h2>Congrats, you adopted a cat!</h2>
              <form className='name-form'>
                  <label htmlFor="nameInput" className='top-margin'>What's your cat's name?</label>
                  <input type="text" value={catName} onChange={(event) => setCatName(event.target.value)} id="nameInput" className='top-margin' required/>
                  <button className='top-margin' onClick={(event) => startStory(event)}>Begin Journey</button>
              </form>
          </div>
            <NavLink to={`/story/${dayNum}/day`}>
              <button>START GAME</button>
            </NavLink>
          )}
          {dayNum > 5 && (
            <>
              <p className="finale-container">
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
        <Route path="/story/:dayNum/result/:type" render={({match}) => <Result type={match.params.type}/>} />
        <Route path="/story/finale">
          <h2>Fin!</h2>
        </Route>
      </Switch>
    </>
  );
}

export default Story;

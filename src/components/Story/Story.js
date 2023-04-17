import React, { useEffect, useState } from "react";
import "./Story.css";
import Day from "../Day/Day";
import Choices from "../Choices/Choices";
import Result from "../Result/Result";
import { Switch, Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCatName } from "../../features/catSlice";
import { addName } from "../../features/storySlice";
import Finale from "../Finale/Finale";

function Story() {
  const dayNum = useSelector((state) => state.day.value);
  const story = useSelector((state) => state.storyline);
  const storedName = useSelector((state) => state.cat.name);
  const [catName, setCatName] = useState("");
  const [introAnimations, setIntroAnimations] = useState(<img src={require("../../images/wizard.gif")} alt="Wizard" />);
  const [introComplete, setIntroComplete] = useState(false);
  const dispatch = useDispatch();

  const replace = (obj) => {
    const keys = Object.keys(obj);
    return keys.reduce((acc, cV) => {
      acc[cV] = obj[cV].replaceAll("replaceME", catName);
      return acc;
    }, {});
  };

  useEffect(() => {
    getIntroAnimations()
  }, [])

  const getIntroAnimations = () => {
      setTimeout(() => {
        setIntroAnimations(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>)
      }, 3000);
      setTimeout(() => {
        setIntroAnimations(<img src={require("../../images/neutral-cat.gif")} alt="Cat" />)
        setIntroComplete(true)
      }, 10000);
  }

  const inputCatName = (event) => {
    if (catName) {
      event.preventDefault();
      dispatch(updateCatName(catName));
      const replaceAll = story.reduce((acc, cV) => {
        acc.push(replace(cV));
        return acc;
      }, []);
      dispatch(addName(replaceAll));
    }
  };

  return (
    <>
      <Switch>
        <Route exact path="/story">
          {dayNum < 5 && (
            <div className="intro">
              {introAnimations}
              {introComplete && <>
              <h2 className="adopt-text">Congrats, you adopted a cat!</h2>
              <form className="name-form">
                <label htmlFor="nameInput" className="top-margin">
                  What's your cat's name?
                </label>
                <div className="name-container">
                  <input
                    type="text"
                    value={catName}
                    onChange={(event) => setCatName(event.target.value)}
                    id="nameInput"
                    className="top-margin"
                    required
                  />
                  <button
                    className="top-margin"
                    onClick={(event) => inputCatName(event)}
                  >
                    Submit
                  </button>
                </div>
              </form>
              </>}
              {storedName &&
              <NavLink to={`/story/${dayNum}/day`} onClick={(event) => {
                if(!storedName) {
                  event.preventDefault();
                }
                setCatName("");
              }}>
                <button>START GAME</button>
              </NavLink>}
            </div>
          )}
          {dayNum > 5 && (
            <>
              <p className="finale-text">
                {`Wow what a week! Frankly, youre exhausted and have no idea what
                to expect next. As you get out of bed and head into the kitchen
                you see ${storedName} already sitting there, waiting for you. It looks
                like they have something important to say...`}
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
        <Route path="/story/finale">
          <Finale />
        </Route>
      </Switch>
    </>
  );
}

export default Story;

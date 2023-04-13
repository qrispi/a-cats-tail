import React, { useEffect, useState } from "react";
import "./Book.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFact } from "../../features/bookSlice";
import { Route, Switch, Redirect } from "react-router-dom";
import Page from "../Page/Page";

function Book() {
  const dayNum = useSelector((state) => state.day.value);
  const [fact, setFact] = useState("");
  const dispatch = useDispatch()
  const getFact = async () => {
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const catFact = await response.json();
      setFact(catFact.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFact();
  }, []);

  return (
    <>
    <Route exact path="/book">
      <p>{fact}</p>
      <NavLink to={`/story/${dayNum + 1}/choices`}>
        <button>Close Book</button>
      </NavLink>
      <button onClick={getFact}>Get a new fact!</button>
      <button className="save-fact" onClick={() => dispatch(addFact(fact))}>Bookmark Fact</button>
      <NavLink to="/book/0">
        <button>My Bookmarks</button>
      </NavLink>
    </Route>
      <Route path="/book/:page">
          <Page />
      </Route>
    </>
  );
}

export default Book;

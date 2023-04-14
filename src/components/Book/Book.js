import React, { useEffect, useState } from "react";
import "./Book.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFact, removeFact } from "../../features/bookSlice";
import { Route } from "react-router-dom";
import Page from "../Page/Page";

function Book() {
  const dayNum = useSelector((state) => state.day.value);
  const savedFacts = useSelector((state) => state.book.facts);
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
        {!savedFacts.includes(fact) && <button className="save-fact" onClick={() => dispatch(addFact(fact))}>Bookmark Fact</button>}
        {savedFacts.includes(fact) && <button onClick={() => dispatch(removeFact(fact))}>Remove Bookmark</button>}
        <button onClick={() => console.log(savedFacts)}>SHOW ME THE FACTS</button>
        {savedFacts[0] && 
          <NavLink to="/book/pages">
            <button>My Bookmarks</button>
          </NavLink>}
      </Route>
      <Route path="/book/pages">
          <Page />
      </Route>
    </>
  );
}

export default Book;

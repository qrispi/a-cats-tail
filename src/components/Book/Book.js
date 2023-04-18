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
  const dispatch = useDispatch();

  const checkPath = () => {
    return dayNum === 6 ? "/story/finale" : `/story/${dayNum + 1}/choices`;
  };

  const getFact = async () => {
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const catFact = await response.json();
      checkFact(catFact);
    } catch (error) {
      console.log(error);
    }
  };

  const checkFact = (fetchedFact) => {
    if (fetchedFact.data[0].length > 200) {
      getFact();
    } else {
      setFact(fetchedFact.data[0]);
    }
  };

  useEffect(() => {
    getFact();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Route exact path="/book">
        <div className="book-container">
          <p className="fact-text">{fact}</p>
          <div className="book-btn-container">
            <NavLink to={checkPath}>
              <button className="blue-button">BACK</button>
            </NavLink>
            <button className="yellow-button" onClick={getFact}>
              NEW FACT
            </button>
            {savedFacts[0] && (
              <NavLink to="/book/pages">
                <button className="yellow-button">MY BOOKMARKS</button>
              </NavLink>
            )}
            {!savedFacts.includes(fact) && (
              <button
                className="save-button"
                onClick={() => dispatch(addFact(fact))}
              >
                BOOKMARK
              </button>
            )}
            {savedFacts.includes(fact) && (
              <button
                className="remove-button"
                onClick={() => dispatch(removeFact(fact))}
              >
                REMOVE
              </button>
            )}
          </div>
        </div>
      </Route>
      <Route path="/book/pages">
        <Page />
      </Route>
    </>
  );
}

export default Book;

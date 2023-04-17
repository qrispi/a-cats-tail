import React, { useState } from "react";
import "./Page.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFact } from "../../features/bookSlice";

function Page() {
  const savedFacts = useSelector((state) => state.book.facts);
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(0);

  const [factDisplay, setFactDisplay] = useState("block");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const turnPage = (direction) => {
    setPageNum(pageNum + direction);
  };

  return (
    <div className="page-container">
      <h2 style={{ margin: 0 }}>Page {pageNum + 1}</h2>
      <p style={{ display: factDisplay, fontSize: "26px" }}>{savedFacts[pageNum]}</p>
      <p style={{ display: errorDisplay }}>
        You ripped out this page!
      </p>
      {!savedFacts.length && <p>No more facts saved.</p>}
      <div className="page-btn-container">
        <NavLink to="/book" style={{textDecoration: "none"}}>
          <button
            className="blue-button"
            style={{ display: factDisplay }}>
            BACK
          </button>
        </NavLink>
        {pageNum > 0 && (
          <button 
            className="dark-blue-button"
            style={{ display: factDisplay }} 
            onClick={() => turnPage(-1)}>
            ⤎
          </button>
        )}

        {savedFacts.includes(savedFacts[pageNum]) && (
          <button
            className="remove-button"
            style={{ display: factDisplay }}
            onClick={() => {
              setFactDisplay("none");
              setErrorDisplay("block");
            }}
          >
            REMOVE
          </button>
        )}
        {savedFacts.length >= pageNum + 2 && (
          <button 
            className="dark-blue-button"
            style={{ display: factDisplay }} 
            onClick={() => turnPage(1)}>
              ⤏
          </button>
        )}
        <button
          className="blue-button"
          style={{ display: errorDisplay }}
          onClick={() => {
            setFactDisplay("block");
            setErrorDisplay("none");
            dispatch(removeFact(savedFacts[pageNum]));
            if (pageNum >= 1) {
              turnPage(-1);
            }
          }}
        >
          BACK
        </button>
      </div>
    </div>
  );
}

export default Page;

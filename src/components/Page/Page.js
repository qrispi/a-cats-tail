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
    <>
      <h2>Page {pageNum + 1}</h2>
      <p style={{ display: factDisplay }}>{savedFacts[pageNum]}</p>
      <p style={{ display: errorDisplay }}>
        Oh no! You ripped out this page! Use the buttons to go to a different
        page.
      </p>
      {!savedFacts.length && <p>No more facts saved.</p>}
      <div className="page-btn-container">
        <NavLink to="/book">
          <button style={{ display: factDisplay }}>BACK</button>
        </NavLink>
        {pageNum > 0 && (
          <button style={{ display: factDisplay }} onClick={() => turnPage(-1)}>
            Prev Page
          </button>
        )}

        {savedFacts.includes(savedFacts[pageNum]) && (
          <button
            style={{ display: factDisplay }}
            onClick={() => {
              setFactDisplay("none");
              setErrorDisplay("block");
            }}
          >
            Remove Bookmark
          </button>
        )}
        {savedFacts.length >= pageNum + 2 && (
          <button style={{ display: factDisplay }} onClick={() => turnPage(1)}>
            Next Page
          </button>
        )}
        <button
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
          Previous page
        </button>
      </div>
    </>
  );
}

export default Page;

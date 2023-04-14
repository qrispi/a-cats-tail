import React, { useState } from "react";
import "./Page.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFact } from "../../features/bookSlice";

function Page() {
  const savedFacts = useSelector((state) => state.book.facts);
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(0);

  const turnPage = (direction) => {
    setPageNum(pageNum + direction);
  };

  const [isFactVisible, setIsFactVisible] = useState(true);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleMessage = () => {
    if (!isMessageVisible) {
      setIsMessageVisible(true);
    }
    setTimeout(() => {
      setIsMessageVisible(false);
    }, 3000);
  };

  const handleFact = () => {
    if (isFactVisible) {
      setIsFactVisible(false);
    }
    setTimeout(() => {
      setIsFactVisible(true);
    }, 3000);
  };


  console.log(savedFacts);
  return (
    <>
      <h2>Page {pageNum + 1}</h2>
      {isFactVisible && <p>{savedFacts[pageNum]}</p>}

      {isMessageVisible && (
        <p>
          Oh no! You ripped out this page! Use the buttons to go to a different
          page.
        </p>
      )}
      {!savedFacts.length && <p>No more facts saved.</p>}
      <NavLink to="/book">
        <button>BACK</button>
      </NavLink>
      {pageNum > 0 && <button onClick={() => turnPage(-1)}>Prev Page</button>}

      {savedFacts.length >= pageNum + 2 && (
        <button onClick={() => turnPage(1)}>Next Page</button>
      )}
      <button
        onClick={() =>
          dispatch(
            removeFact(savedFacts[pageNum]),
            handleFact(),
            handleMessage()
          )
        }
      >
        Remove Bookmark
      </button>
    </>
  );
}

export default Page;

// Old code
// <h2>Page {pageNum + 1}</h2>
//       <p>{savedFacts[pageNum]}</p>
//       {!savedFacts[pageNum] && <p>Oh no! You ripped out this page! Use the buttons to go to a different page.</p>}
//       <NavLink to="/book">
//         <button>BACK</button>
//       </NavLink>
//       {pageNum > 0 && <button onClick={() => turnPage(-1)}>Prev Page</button>}
//       {savedFacts.includes(savedFacts[pageNum]) && <button onClick={() => dispatch(removeFact(savedFacts[pageNum]))}>Remove Bookmark</button>}
//       {savedFacts.length >= (pageNum + 2) && <button onClick={() => turnPage(1)}>Next Page</button>}

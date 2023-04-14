import React, { useState } from "react";
import "./Page.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFact, removeFact } from "../../features/bookSlice";

function Page() {
    const savedFacts = useSelector((state) => state.book.facts);
    const dispatch = useDispatch();
    const [pageNum, setPageNum] = useState(0)

    const turnPage = (direction) => {
      setPageNum(pageNum + direction)
    }
    
    return (
    <>
      <h2>Page {pageNum + 1}</h2>
      <p>{savedFacts[pageNum]}</p>
      <NavLink to="/book">
        <button>BACK</button>
      </NavLink>
      {pageNum > 0 && <button onClick={() => turnPage(-1)}>Prev Page</button>}
      {/* {!savedFacts.includes(fact) && <button className="save-fact" onClick={() => dispatch(addFact(fact))}>Bookmark Fact</button>} */}
      {/* {savedFacts.includes(fact) && <button onClick={() => dispatch(removeFact(fact))}>Remove Bookmark</button>} */}
      {savedFacts.length >= (pageNum + 2) && <button onClick={() => turnPage(1)}>Next Page</button>}
    </>
  );
}

export default Page;
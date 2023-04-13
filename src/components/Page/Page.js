import React, { useEffect, useState } from "react";
import "./Page.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFact } from "../../features/bookSlice";

function Page() {
    const dispatch = useDispatch();
    return (
    <>
      <h1>{fact}</h1>
      <NavLink to="/">
        <button>Close Page</button>
      </NavLink>
      <button>Prev Page</button>
      <button className="save-fact" onClick={() => dispatch(addFact(fact))}>Save Fact</button>
      <button>Next Page</button>
    </>
  );
}

export default Page;
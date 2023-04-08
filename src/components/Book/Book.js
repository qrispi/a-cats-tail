import React, { useEffect, useState } from "react";
import "./Book.css";
import { NavLink } from "react-router-dom";

function Book() {
  const [fact, setFact] = useState("");
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
      <h1>{fact}</h1>
      <NavLink to="/">
        <button>Close Book</button>
      </NavLink>
      <button onClick={getFact}>Get a new fact!</button>
    </>
  );
}

export default Book;

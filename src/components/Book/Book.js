import React, { useEffect } from "react";
import "./Book.css";

function Book() {
  const getFact = async () => {
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const catFact = await response.json();
      console.log(catFact);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFact()
  }, []);

  return (
    <>
      <h1>this is a cat fact</h1>
    </>
  );
}

export default Book;

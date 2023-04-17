import React from "react";
import "./App.css";
import Story from "../Story/Story";
import Book from "../Book/Book";
import { Route, Switch, Redirect } from "react-router-dom";


function App() {

  const getRandomColor = () => {
    const colors = ["#d71377", "#0b97a8", "#522d94", "#90c62a", "#fcd00b"]
    return colors[Math.floor((Math.random() * 5))]
  }

  return (
    <div className="frame" style={{backgroundColor: getRandomColor() }}>
      <div className='play-screen'>
      <Switch>
        <Route path="/story">
          <h1 className="title">A Cat's Tail</h1>
          <Story />
        </Route>
        <Route path="/book">
          <h1>The Book of Cat</h1>
          <img src={require("../../images/book.gif")} alt="Book" style={{height: 100 }} />
          <Book />
        </Route>
        <Redirect from="/" to="/story" />
      </Switch>
      </div>
    </div>
  );
}

export default App;

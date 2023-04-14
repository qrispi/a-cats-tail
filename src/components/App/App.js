import React from "react";
import "./App.css";
import Story from "../Story/Story";
import Book from "../Book/Book";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="frame">
      <div className='play-screen'>
      <Switch>
        <Route path="/story">
          <h1 className="title">A Cat's Tail</h1>
          <Story />
        </Route>
        <Route path="/book">
          <h1>The Book of Cat</h1>
          <Book />
        </Route>
        <Redirect from="/" to="/story" />
      </Switch>
      </div>
    </div>
  );
}

export default App;

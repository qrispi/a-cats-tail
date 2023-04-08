import React from 'react';
import './App.css';
import Story from '../Story/Story';
import Book from '../Book/Book';

function App() {
  return (
    <div className='frame'>
      {/* <div className='play-screen'> */}
        <h1 className='title'>A Cat's Tail</h1>
        <Story />
        <Book />
      {/* </div> */}
    </div>
  )
}

export default App;
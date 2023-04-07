import React from 'react';
import './Story.css';

function Story() {
    return (
        <div className='intro'>
            <h2>Congrats, you adopted a cat!</h2>
            <form className='name-form'>
                <label htmlFor="nameInput" className='top-margin'>What's your cat's name?</label>
                <input type="text" id="nameInput" className='top-margin' required/>
                <button className='top-margin'>Continue</button>
            </form>
        </div>
    )
} 

export default Story;
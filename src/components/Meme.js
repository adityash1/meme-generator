import { useState } from 'react';
import memesData from '../memesdata.js';

export default function Meme() {
    const [image, setImage] = useState(null);

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setImage(memesArray[randomNumber].url) 
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <img src={image} alt="meme" className='meme--image'/>
            </div>
        </main>
    )
}
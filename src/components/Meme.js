import { useState, useEffect } from 'react';

export default function Meme() {
    // const [image, setImage] = useState(null);

    const [allMemes, setAllMemes] = useState([])

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1bij.jpg',
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMeme({
            ...meme,
            [name]: value
        })
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        // const url = memesArray[randomNumber].url
        const { url } = allMemes[randomNumber]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" alt='meme'/>
                    <h2 className="meme--text top">{ meme.topText }</h2>
                    <h2 className="meme--text bottom">{ meme.bottomText }</h2>
                </div>
            </div>
        </main>
    )
}
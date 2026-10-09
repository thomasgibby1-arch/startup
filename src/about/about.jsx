import React from 'react';
import './about.css';

export function About() {
    const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
    
    React.useEffect(() => {
        setImageUrl(`https://images.ygoprodeck.com/images/cards/89631139.jpg`);

    }, []);

    return (
        <main className="container-fluid bg-secondary text-center">

                <p>
                    This is a website that can track the Life Points you have in either Yu-Gi-Oh or Magic: the Gathering
                </p>
                <p>
                    Yu-Gi-Oh is owned by Konami and Magic is owned by Wizards of the Coast. This is not a for profit website.
                </p>
                <p>
                    This is a placeholder for having a random Yu-Gi-Oh or Magic card show up. (this is what I will use the APIs for)
                </p>

                <div>
                    <div id='picture' className='picture-box'>
                    <img src={imageUrl} alt='random image' />
                </div>
                </div>
        </main>    
    );
}
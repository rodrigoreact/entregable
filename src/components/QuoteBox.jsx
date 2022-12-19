import React, {useState} from 'react';
import quotes from '../quotes.json';
import colors from '../color.json';


const QuoteBox = () => {



    const [quoteR, setQuoteR] = useState( Math.floor(Math.random()*quotes.length)); 

    const [colorR, setColorR] = useState(Math.floor(Math.random()*colors.length));


    const changeParag = () => {
        setQuoteR(Math.floor(Math.random()*quotes.length));
        setColorR(Math.floor(Math.random()*colors.length));           
    }


    return (
        <div className="contain" style={{backgroundColor:colors[colorR].body}}>

            <div className="card" style={{color:colors[colorR].text}}>
                <div className="quote">
                 <i className='fa-solid fa-arrow-right'></i>
                 <p>{quotes[quoteR].quote}</p>
                 </div>
                 <div className="section">
                    <h2>{quotes[quoteR].author}</h2>
                    <div className="icon" onClick={changeParag} style={{backgroundColor:colors[colorR].text}}>
                    <i className="fa-solid fa-forward"></i>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default QuoteBox;
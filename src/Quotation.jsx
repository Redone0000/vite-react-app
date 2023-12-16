import React from 'react';
import { data } from './data'; 

const Quotation = ({ count, shuffle, author }) => {

  let filteredQuotes = data;

  if (author) {
    filteredQuotes = filteredQuotes.filter(quote => quote.autor === author);
  }

  if (shuffle) {

    filteredQuotes = shuffleArray(filteredQuotes);
  }

  if (count && count > 1) {

    console.log(`Nombre total de citations: ${filteredQuotes.length}`);
  }

  if (count) {

    filteredQuotes = filteredQuotes.slice(0, count);
  }

  return (
    <div>
      {filteredQuotes.map((quote, index) => (
        <div key={index}>
          <p>{quote.quote}</p>
          <p>- {quote.autor}</p>
        </div>
      ))}
    </div>
  );
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default Quotation;

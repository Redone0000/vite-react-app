import {data} from './data';

const SimpleQuotation = () => {
          let randomIndex = Math.floor(Math.random() * data.length);
          let randomQuote = '"'+data[randomIndex].quote+'" - '+data[randomIndex].autor;
          return randomQuote;     
}
export default SimpleQuotation;

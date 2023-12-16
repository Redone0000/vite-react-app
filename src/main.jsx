import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Message from './Message';
import SimpleQuotation from './SimpleQuotation';
import Quotation from './Quotation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Message 
      titre='Salutations' 
      contenu='Bonjour à tous!' 
      date={new Date().toLocaleDateString( 'fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'})} 
    />
    <Message 
      titre='Notification' 
      contenu='Afficher avec succès' 
      date={`${new Date(1985, 1, 26).getDate().toString().padStart(2, '0')} ${
        (new Date(1985, 1, 26).getMonth() + 1).toString().padStart(2, '0')
      } ${new Date(1985, 1, 26).getFullYear()}`}
    />
    <Message 
      titre='Tfe deuxieme sess' 
      contenu='Octobre' 
      date={`${new Date(2024, 9, 10).getDate().toString().padStart(2, '0')} ${
        (new Date(2024, 9, 10).getMonth() + 1).toString().padStart(2, '0')
      } ${new Date(2024, 9, 10).getFullYear()}`}
    />
    <Message contenu='Informartions sans titre'/>
    <SimpleQuotation />
    <Quotation count={2} />
    {/* <Quotation shuffle /> */}
    {/* <Quotation author="Clint Eastwood" count={3} shuffle /> */}
  </React.StrictMode>,
)

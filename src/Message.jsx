// Message.js
import React from 'react';
import './style.css';

const Message = ({titre, date, contenu}) => {

  // const today = new Date();
  // const formatDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  const titleStyle = {backgroundColor:'black', color:'white',display: 'inline-block',padding: '10px'}

  return (
    <>
        <div className='message-container'>
        {titre && <h2 style={titleStyle}>{titre}</h2>}
        {contenu && <p className='brushing'>{contenu}</p>}
        {date && <div className='date-info'>Date du jour : {date}</div>}
      </div>
    </>
  );
};

export default Message;

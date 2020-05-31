import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      onKeyPress={event =>event.keyCode === 27  ? <div>alert("are you sure want to exit");</div>:null}
     />
    {/* <div>onKeyPress={event =>event.keyCode === 27  ? <div>alert("are you sure want to exit");</div>:null}</div> */}
   
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)
export default Input;
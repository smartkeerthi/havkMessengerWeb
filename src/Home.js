import React, { useState, useEffect } from 'react';
import Messages from './Messages';
import {db , auth} from './firebase';
import firebase from 'firebase';
import './App.css';
import Header from './Header';

function Home() {
  
  const [input,setInput] = useState("");
  const [message,setMessage] = useState([{}]);
  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  const sendmessage = (e)=>{
    e.preventDefault();
    db.collection('messages').add({
      username: auth.currentUser.displayName,
      text:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage([...message,{username:auth.currentUser.displayName,text:input}]);
    setInput("");
  }

  return (
    <div className="App">
      <Header />
      {
        message.map(mes => (
          <Messages username={auth.currentUser.displayName} mes={mes} />
      ))
      }
      <form className="typeInput fixed-bottom p-3 bg-primary rounded">
        <div class="input-group">
          <input type="text" class="form-control border-light p-1" placeholder="Enter your message..." aria-label="Recipient's username" aria-describedby="button-addon2"
          value={input} 
          onChange={(e) => setInput(e.target.value)} />
          <div class="input-group-append">
            <button class="btn btn-primary border-light" type="submit" id="button-addon2" 
            onClick={sendmessage} 
            disabled={!input}>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
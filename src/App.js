import React, { useState, useEffect } from 'react';
import {auth} from './firebase';
import Home from './Home';
import Login from './Login';
import './App.css';

function App() {

  const [user,setUser] = useState(null);
  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser) {
        setUser(authUser);
      }else{
        setUser(null);
      }
    })
  },[])

    

  return (
    <div>
      {user ? (<Home />) : (<Login />)}
    </div>
  );
}

export default App;

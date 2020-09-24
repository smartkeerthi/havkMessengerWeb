import React, { useState } from 'react';
import {auth} from './firebase';
import Register from './Register';
import './login.css';

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);

  const LoginUser = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .catch((error)=>{
      setError(error.message);
    });
    setEmail("");
    setPassword("");
  }
  
  

  return (
    <div className="row main">
        <Register />
        <form className="col">
          <div className ="jumbotron text-center">
              <h1 className ="display-5 text-primary">LOGIN</h1>
          </div>
          {error ? <small id="validationCustom03" className="text-danger mb-3"> {error} </small> : null}
          <div class="form-group ">
            <label for="exampleInputEmail1">Email address :</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password :</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <small id="passwordHelpInline" class="text-muted">
              Must be 8-20 characters long.
            </small>
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-3" onClick={LoginUser}>Login</button>
        </form>
    </div>
  );
}

export default Login;

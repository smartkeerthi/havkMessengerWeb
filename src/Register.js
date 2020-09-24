import React, {useState} from 'react';
import {auth} from './firebase';

const Register = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const [error,setError] = useState(null);

    const SignUpUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser) => {
          console.log(authUser);
          return authUser.user.updateProfile({
            displayName : username
          })
        })
        .catch((error) => {
          setError(error.message);
        });
        setEmail("");
        setPassword("");
        setUsername("");
      }


    return ( 
        <form className="col">
          <div className ="jumbotron text-center">
              <h1 className ="display-5 text-primary">SIGN UP</h1>
          </div>
          {error ? <small id="validationCustom03" className="text-danger mb-3"> {error} </small> : null}
          <div class="form-group">
            <label for="exampleInputEmail1">Username :</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
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
          <button type="submit" class="btn btn-primary btn-block mb-3" onClick={SignUpUser} >Sign Up</button>
        </form>
     );
}
 
export default Register;
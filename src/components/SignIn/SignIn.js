import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue} from "firebase/database";

export default function SignIn(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  
  //admin credentials
  const adminEmail='BitcareAdmin@gmail.com';
  const adminPassword='Password@123';

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const db = getDatabase();
    const dbRef = ref(db, 'ClinicLocation');

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log("real db key: ",childKey);
        console.log("real db data: ",childData);
        // ...
      });
    }, {
      onlyOnce: true
    });

    // Compare user info
      if (email!==adminEmail || password !== adminPassword) {
        // Invalid credentials
        setErrorMessage('Invalid email or password')
      } else {
        navigate("home");
      }
  };

  return (
    <>
        <form onSubmit={handleSubmit} className='login-form'>
          <img src="../assets/logo.png" className="logo" alt=""/>
          <h1 style={{ marginBottom: "0px" }}>Welcome back</h1>
          <div className="subHeader">
            Welcome back! Please enter your details
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <div className="input-container">
            <input
              type="email"
              name="uname"
              required
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="pass"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <input type="submit" value="Sign in" />
          </div>
        </form>
    </>
  );
}


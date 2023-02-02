import React, { useState,useEffect } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue} from "firebase/database";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../index";

export default function SignIn(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidUser,setValidUser]=useState(false);
  const [location,setLocation]=useState('');
  const [locations,setLocations]=useState([]);

  //admin credentials
  // const adminEmail='BitcareAdmin@gmail.com';
  // const adminPassword='Password@123';
  const auth = getAuth();

  useEffect(() => {
    const list=[];
    const fetchLocations = async () => {
      await getDocs(collection(db, "Locations")).then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          data.id = element.id;
          // console.log("data: ", element.id);
          if (data.active) {
            list.push(data);
            // setLocations((arr) => [...arr, data]);
            // console.log('location: ',data.name)
          }
        });
      });
    };
    fetchLocations();
    setLocations(list);
    console.log("List of locations: ",locations);
    return function reset() {
      setLocations([]);
    };
  }, [])

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

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('Locations array: ',locations)
    const adminLoc=locations.find(loc=>loc.email===email);
    console.log('Admin Location: ',adminLoc)
    if(adminLoc){
      if(adminLoc.name)
        {
          setLocation(adminLoc.name);
        
    navigate("home",{state:{adminLocation:adminLoc.name}});
  }
  else
  navigate("home");
    }
    else
    setErrorMessage("User don't exist");
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log('Error while signin: ',error);
    setErrorMessage(error.message);
  });

    // Compare user info
      // if (email!==adminEmail || password !== adminPassword) {
      //   // Invalid credentials
      //   setErrorMessage('Invalid email or password')
      // } else {
      //   navigate("home");
      // }
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


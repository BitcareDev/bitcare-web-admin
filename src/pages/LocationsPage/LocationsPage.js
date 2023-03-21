import { useEffect, useState } from "react"
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../index";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import './LocationsPage.css';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import Toggle from 'react-toggle'
import "react-toggle/style.css" ;

export default function LocationsPage(props) {
  const {search,setActive}=props;
  const isOpen=props.active;
  const [isNew, setIsNew] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [locations, setLocations] = useState([]);
  const [filterdLocations, setFilteredLocations] = useState([]);
  const [location, setLocation] = useState(null);
  const { name, email, address, active, phone, password } = location ? location : props;
  const auth = getAuth();
  
  useEffect(() => {
    const fetchLocations = async () => {
      await getDocs(collection(db, "Locations")).then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          data.id = element.id;
          console.log("data: ", data);
          if (data.active===isOpen) {
            setLocations((arr) => [...arr, data]);
            setFilteredLocations((arr) => [...arr, data]);
          }
        });
      });
    };
    fetchLocations();
    if (location) {
      setIsNew(true);
    }
    return function reset() {
      setLocations([]);
    };
  }, [location,isOpen]);

  useEffect(()=>{
    setFilteredLocations([]);
    if(search==='')
    setFilteredLocations(locations)
    if(search!==''){
      locations.forEach((item)=>{
        if(item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.address.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        setFilteredLocations((arr) => [...arr, item]);
      })
    }
  },[search,filterdLocations])

  return (<>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h4>Locations</h4>
      <div className="toggle-container">
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(active => !active)}
            className="toggle"
            id="toggle"
          />
          <label htmlFor="toggle" className="toggle-label">
            {active ? "Active" : "Inactive"}
          </label>
      </div>
    </div>
    <button
        className="add-provider-btn"
        onClick={() => setIsNew(true)}
      >
        Add location
    </button>
    {isNew ? <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          email: email,
          password: password,
          name: name,
          address: address,
          phone: phone,
          active: active ? active : isActive,
        }}
        validate={(values) => {
          console.log("Values: ", values);
          const re = /^[0-9\b]+$/;
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          if (!location) {
            createUserWithEmailAndPassword(auth, values.email, values.password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User we stored: ",user);
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });

            await addDoc(collection(db, "Locations"),{
              name:values.name,
              email:values.email,
              active:values.active,
              address:values.address,
              phone:values.phone
            });
            setTimeout(() => {
              alert(
                JSON.stringify(
                  { values },
                  null,
                  2
                )
              );
              setSubmitting(false);
            }, 400);
          } else {
            console.log("Id:", location.id);
            console.log("Values: ", values)
            await setDoc(doc(db, "Locations", location.id), {
              name:values.name,
              email:values.email,
              active:values.active,
              address:values.address,
              phone:values.phone
            });
            setTimeout(() => {
              alert(
                JSON.stringify(
                  { values },
                  null,
                  2
                )
              );
              setSubmitting(false);
            }, 400);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div class="container px-4" style={{ marginTop: "30px" }}>
              <div class="row gx-5 gy-3">
                <div class="col-md-6 col-sm-6 item">
                  <Field type="text" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div class="col-md-6 col-sm-6 item">
                  <Field type="text" name="address" placeholder="Address" />
                  <ErrorMessage name="address" component="div" />
                </div>
                <div class="col-md-6 col-sm-6 item">
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" />
                </div>

                {!location && <div class="col-md-6 col-sm-6 item">
                  <Field type="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="div" />
                </div>}
                <div class="col-md-6 col-sm-6 item">
                  <Field type="text" name="phone" placeholder="Phone" />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div class="col-md-6 col-sm-6 item">
                  <label>
                    <Field
                      type="checkbox"
                      name="active"
                      className="day-checkbox"
                    //   value={!isActive}
                    />
                    Active
                  </label>
                </div>
                <div
                  class="col-md-2 col-sm-2 item"
                >
                  <button
                    type="submit"
                    style={{
                      background: "#02704A",
                      color: "white",
                      border: "0",
                    }}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 item">
                  <button
                    type="button"
                    onClick={() => {
                      setIsNew(false)
                      return setLocation(null);
                    }}
                    style={{ border: "0" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div> : <div class="container px-4" style={{ marginTop: "30px" }}>
      <div class="row gx-5 gy-3">
        {filterdLocations && filterdLocations.length > 0 && filterdLocations.map((item, idx) => (<div class="col-md-6 col-sm-6 item">
          <div
            class="p-3"
            style={{
              background: "white",
              borderRadius: "5px",
              width: "-webkit-fill-available",
            }}
          >
            <div
              class="row"
              style={{
                background: "#E7EDE5",
                margin: "auto",
                padding: "10px 0px",
                borderRadius: "5px",
              }}
            >
              <div class="col">
                <img
                  src="../assets/icons8-location-50.png"
                  className="doctor-icon"
                  style={{ marginTop: "13px" }}
                  alt="logo"
                />
              </div>
              <div class="col-md-9">
                <div>{item.name}</div>
                <div>{item.address}</div>
              </div>
              <div class="col">
                <img
                  src="../assets/icons8-menu-vertical-30.png"
                  className="doctor-icon"
                  style={{ marginTop: "13px" }}
                  alt="logo"
                  onClick={() => setLocation(item)}
                />
              </div>
            </div>
          </div>
        </div>))}
      </div>
    </div>}
  </>)
}

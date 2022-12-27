import "./AppointmentsPage.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../index";
import { type } from "@testing-library/user-event/dist/type";

export default function AppointmentsPage({type}) {
  console.log('type: ',type)
    const [appointments,setAppointments]=useState([]);
//   const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

useEffect(()=>{
    const fetchAppointments=async()=>{
        await getDocs(collection(db, "ClinicBooking")).then((querySnapshot) => {

            querySnapshot.forEach(element => {    
                var data = element.data();    
                console.log('data: ',data.userBookingType?.toLowerCase());
                if(type!=='all' && data.userBookingType && data.userBookingType.toLowerCase()===type)    
                setAppointments(arr => [...arr , data]);
                else if(type==='all')
                setAppointments(arr => [...arr , data]);
            });    
        })
    }  
    fetchAppointments()
    const list=appointments
    return function reset(){
      setAppointments([]);
    }
},[type])
  return (
    <>
      {/* <div style={{display:'flex',justifyContent:'space-between'}}> */}
      <h4 style={{marginBottom:'30px'}}>Appointments</h4>
      {/* <div style={{background:'#E7EDE5',padding:'15px'}}>
            <Row className="gx-5">
                <Col xs='12' md='6' lg='6' style={{background:'white',padding:'15px'}} className="m-10">
                    <div style={{background:'white'}}>
                        <div style={{background:'#E7EDE5'}}>11:00 AM</div>
                        <div style={{background:'#E7EDE5'}}>Thu Jan 12 2023</div>
                        <div>
        <img src="../assets/icons8-doctor-53.png" className="menu-logo" alt="logo"/>
        <img src="../assets/menu.png" className="doc-icon" alt="logo"/>
        <img src="../assets/menu.png" className="menu-logo" alt="logo"/>
        <img src="../assets/menu.png" className="menu-logo" alt="logo"/>

                        </div>
                    </div>
                </Col>
                <Col xs='12' md='6' lg='6'></Col>
            </Row>
        </div> */}
      <div class="container px-4">
        <div class="row gx-5 gy-3">
          {appointments.length>0 && appointments.map((item, idx) => (
            <div class="col-md-6 col-sm-6 item">
              <div class="p-3" style={{ background: "white", borderRadius:'5px' }}>
                <div class='row' style={{ background: "#E7EDE5", margin:'auto',padding:'10px 0px',borderRadius:'5px' }}>
                    <div class='col-md-10'>
                    <div>{item.userTime}</div>
                <div>{item.userselectedday}{" "}{item.userDate}</div>
                    </div>
                    <div class='col'><img
                      src={item.userBookingType==='Clinic'?"../assets/clinic.png":
                      item.userBookingType==='Covid'?"../assets/covid19.png":
                      item.userBookingType==='MedSpa'?"../assets/medspa.png":"../assets/telemedicine.png"}
                      className="doctor-icon"
                      style={{ marginTop: "13px" }}
                      alt="logo"
                    /></div>
                </div>
                <div>
                    <div class='row gy-3' style={{ marginTop: "0px" }}>
                    <div class='col-md-6' style={{ display: "inline-flex" }}>
                    <img
                      src="../assets/icons8-doctor-64-1.png"
                      className="doctor-icon"
                      alt="logo"
                    />
                    <p className="item-value">{item.providerName}</p>
                  </div>
                  <div class='col-md-6' style={{ display: "inline-flex" }}>
                    <img
                      src="../assets/icons8-person-50.png"
                      className="doctor-icon"
                      alt="logo"
                    />
                    <p className="item-value">{item.userName}</p>
                  </div>
                    {/* </div>
                    <div class='row'> */}
                    <div class='col-md-6' style={{ display: "inline-flex" }}>
                    <img
                      src="../assets/icons8-location-50.png"
                      className="doctor-icon"
                      alt="logo"
                    />
                    <p className="item-value">{item.userLocation}</p>
                  </div>
                  <div class='col-md-6' style={{ display: "inline-flex" }}>
                    <img
                      src="../assets/icons8-medical-service-67.png"
                      className="doctor-icon"
                      alt="logo"
                    />
                    <p className="item-value">{item.userAppointmentReason}</p>
                  </div>
                    </div>              
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// doctors name
// user name
// date and time
// location
// booking type
// appointment reason

import "./AppointmentsPage.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Toggle from 'react-toggle';
import "react-toggle/style.css" ;
import { Modal,Button } from "react-bootstrap";
import CryoskinCF from "../../components/CryoskinCF/CryoskinCF";
import IPLaserHairRemovalCF from "../../components/IPLaserHairRemovalCF/IPLaserHairRemovalCF";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

export default function AppointmentsPage(props) {
  const empty_arr=[];
  const {search,type,date,location,active,setActive}=props;
  const today=new Date();
  console.log("Search: ",search)
  console.log("Date: ",date)
  console.log("Today: ",today)
  console.log('type: ',type)
console.log('Location: ',location)
const [appointments,setAppointments]=useState([]);
    const [filteredAppointments,setFilteredAppointments]=useState([]);
    const [showModel,setShowModel]=useState(false);
    const [showCFModel,setShowCFModel]=useState(false);
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState(null);
    const [consentForm,setConsentForm]=useState('');
    const [service,setService]=useState('');

//   const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

useEffect(()=>{
  const fetchUsers=async()=>{
    await getDocs(collection(db, "users/userProfiles/AllUsers")).then((querySnapshot) => {
        querySnapshot.forEach(element => {    
            var data = element.data();    
            console.log('users data: ',data);
            setUsers(arr=>[...arr,data]);
        });    
    })
}  
fetchUsers()
return function reset(){
  setUsers([]);
}
},[])

useEffect(()=>{
  setAppointments([]);
    const fetchAppointments=async()=>{
        await getDocs(collection(db, type==='medspa'?"MedspaBooking":"ClinicBooking")).then((querySnapshot) => {

            querySnapshot.forEach(element => {    
                var data = element.data();    
                // console.log('data: ',data.userBookingType?.toLowerCase());
                // if(new Date(data.userDate).getTime()>=today.getTime()){
                  if(type!=='all' && data.userBookingType && data.userBookingType.toLowerCase()===type)    
                setAppointments(arr => [...arr , data]);
                // else if(type==='all')
                // setAppointments(arr => [...arr , data]);
                // }
            });    
        })
    }  
    fetchAppointments()
    const list=appointments
    // return function reset(){
    //   setAppointments([]);
    // }
},[type])

// useEffect(()=>{
// setFilteredAppointments([]);
// },[date,location,search,active])
useEffect(()=>{
setFilteredAppointments(apmt=>[...empty_arr]);
console.log('appointments: ',appointments)
console.log('Search: ',search==='')
console.log('Location: ',location)
console.log('filteredAppointments: ',filteredAppointments)
console.log('Active: ',active)
console.log('date===today: ',date.getDate()===today.getDate())
// console.log('date===today: ',date===today)
if(active){
  console.log('if block')
  if(search==='' && location==='All' && date.getDate()===today.getDate()){
    appointments.forEach((item)=>{
      console.log("Is userdate today: ",new Date(item.userDate).getDate()===today.getDate())
      if(new Date(item.userDate).getDate()===today.getDate())
        setFilteredAppointments(arr=>[...arr,item])
    })
  }
  else {
    appointments.forEach((item)=>{
      console.log('else block')
      console.log(new Date(item.userDate).getTime()===date.getTime())
      if(date.getDate()!==today.getDate()){
        if(new Date(item.userDate).getDate()===date.getDate()){
          if(location!=='All'){
            if(item.userLocation===location){
              if(search!==''){
                if(item.providerName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                item.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                item.userEmail.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                item.userAppointmentReason.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              )
              setFilteredAppointments(arr=>[...arr,item])
              }
              else
              setFilteredAppointments(arr=>[...arr,item])
            }
          }
          else
          setFilteredAppointments(arr=>[...arr,item])
        }
      }
      else if(location!=='All'){
        if(item.userLocation===location){
          if(search!==''){
            if(item.providerName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.userEmail.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.userAppointmentReason.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          setFilteredAppointments(arr=>[...arr,item])
          }
          else
          setFilteredAppointments(arr=>[...arr,item])
        }
      }
      else if(search!==''){
        if(item.providerName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        item.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        item.userEmail.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        item.userAppointmentReason.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      setFilteredAppointments(arr=>[...arr,item])
      }
    })
  }
}
else {
  if(search==='' && location==='All'){
    appointments.forEach((item)=>{
      if(new Date(item.userDate).getTime()<today.getTime() && new Date(item.userDate).getDate()!==today.getDate())
        setFilteredAppointments(arr=>[...arr,item])
    })
  }
  else {
    appointments.forEach((item)=>{
      if(new Date(item.userDate).getTime()<today.getTime() && new Date(item.userDate).getDate()!==today.getDate()){
        if(location!=='All'){
          if(item.userLocation===location){
            if(search!==''){
              if(item.providerName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
              item.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
              item.userEmail.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
              item.userAppointmentReason.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            setFilteredAppointments(arr=>[...arr,item])
            }
            else
            setFilteredAppointments(arr=>[...arr,item])
          }
        }
        else if(search!==''){
          if(item.providerName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          item.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          item.userEmail.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          item.userAppointmentReason.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        setFilteredAppointments(arr=>[...arr,item])
        }
      }
    })
  }
}
},[date,location,search,active,appointments])

const handleClose=()=>{
  setShowModel(false);
  setUser(null)
}

const handleMFClose=()=>{
  setShowCFModel(false);
  setConsentForm('');
}

const getUser=(email)=>{
  const value=users.find((item)=>item.email===email);
  if(value)
  setUser(value)
  console.log('user: ',user)
  setShowModel(true)
}

const getConsentForm=(appointment)=>{
  if(appointment.userAppointmentReason==='Cryo Skin' || appointment.userAppointmentReason==='IPL Hair Removal'){
    setService(appointment.userAppointmentReason);
  setShowCFModel(true);
  }
  
}

  return (
    <>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h4 style={{marginBottom:'30px'}}>Appointments</h4>
  <Toggle
    // defaultChecked={active}
    checked={active}
    onChange={()=>setActive(act=>!act)} 
    className='custom-toggle'
    icons={false}/>
    </div>
    {/* <span>Custom icons</span> */}
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
          {filteredAppointments.length>0? filteredAppointments.map((item, idx) => (
            <div class="col-md-6 col-sm-6 item">
              <div class="p-3" style={{ background: "white", borderRadius:'5px' }}>
                <div class='row' style={{ background: "#E7EDE5", margin:'auto',padding:'10px 0px',borderRadius:'5px' }}>
                    <div class='col-md-10'>
                    <div>{item.userTime}</div>
                <div>{item.userselectedday}{" "}{item.userDate}</div>
                    </div>
                    <div class='col'><img
                      src={item.userBookingType.toLocaleLowerCase()==='clinic'?"../assets/clinic.png":
                      item.userBookingType.toLocaleLowerCase()==='covid'?"../assets/covid19.png":
                      item.userBookingType.toLocaleLowerCase()==='medspa'?"../assets/medspa.png":"../assets/telemedicine.png"}
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
                    <p className="item-value pointer"
                      onClick={()=>getUser(item.userEmail)}
                      >{item.userName}</p>
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
                      src="../assets/icons8-envelope-30.png"
                      className="doctor-icon"
                      alt="logo"
                    />
                    <p className="item-value">{item.userEmail}</p>
                  </div>
                  <div class='col-md-6' style={{ display: "inline-flex" }}>
                    <img
                      src="../assets/icons8-medical-service-67.png"
                      className="doctor-icon"
                      alt="logo"
                    />
                    <p className="item-value pointer"
                    onClick={()=>getConsentForm(item)}>{item.userAppointmentReason}</p>
                  </div>
                  <div class='col-md-6' style={{ display: "inline-flex" }}>
                    <img
                      src="../assets/icons8-authentication-50.png"
                      className="doctor-icon"
                      alt="logo"
                    />
                    <p className="item-value">{item.activationCode}</p>
                  </div>
                    </div>              
                </div>
              </div>
            </div>
          )):
          <div>No data found</div>}
        </div>
        <Modal show={showModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user?user.name:'No user found'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCFModel} onHide={handleMFClose} fullscreen={true}>
        {/* <Modal.Header closeButton>
          <Modal.Title>{service}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          {service==='Cryo Skin'?<CryoskinCF/>:<IPLaserHairRemovalCF/>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMFClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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

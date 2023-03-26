import React, { useEffect, useState } from "react";
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     Container, Row, Col, Form, Input, Button, Navbar, Nav,
//     NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//     DropdownToggle, DropdownMenu, DropdownItem
//   } from 'reactstrap';
// import logo from '../../../public/assets/logo.png';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AppointmentsPage from "../AppointmentsPage/AppointmentsPage";
import ProvidersPage from "../ProvidersPage/ProvidersPage";
import UsersPage from "../UsersPage/UsersPage";
import ServicesPage from "../ServicesPage/ServicesPage";
import LocationsPage from '../LocationsPage/LocationsPage';
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import DatePicker from "react-datepicker";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import "react-datepicker/dist/react-datepicker.css";
import {useLocation} from 'react-router-dom';
import AspenLaserCF from "../../components/AspenLaserCF/AspenLaserCF";
import CompressionTherapyCF from "../../components/CompressionTherapyCF/CompressionTherapyCF";
import CryoskinCF from "../../components/CryoskinCF/CryoskinCF";
import DermalFillersInformedCF from "../../components/DermalFillersInformedCF/DermalFillersInformedCF";
import EmsculptNeoCF from "../../components/EmsculptNeoCF/EmsculptNeoCF";
import HydraFacialInformedCF from "../../components/HydraFacialInformedCF/HydraFacialInformedCF";
import IVII_CF from "../../components/IVII_CF/IVII_CF";
import OxygenBarInformedCF from "../../components/OxygenBarInformedCF/OxygenBarInformedCF";
import PRP_and_FI_CF from "../../components/PRP_and_FI_CF/PRP_and_FI_CF";
import { Modal,Button } from "react-bootstrap";
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Chat/Sidebar';
import '../../../src/style.scss';
import { useNavigate } from "react-router-dom";
import JsPDF from 'jspdf';
import { getStorage, ref,getDownloadURL ,uploadBytesResumable} from "firebase/storage";
import html2canvas from "html2canvas";
import { html2pdf } from "html2pdf.js";
// import reportDoc from '../../../lo';
import html2PDF from 'jspdf-html2canvas';

export default function Home(props) {
  // Create a root reference
  const storage = getStorage();
  const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg'
  const path = useLocation();
  const adminLocation=path?.state?.adminLocation?path.state.adminLocation:'All';
  const [show, setShow] = useState(true);
  const [select, setSelect] = useState('');
  const [selectedItem, setSelectedItem] = useState('chat');
  const [locations, setLocations] = useState(['All']);
  console.log("Location before : ",adminLocation)
  const [location, setLocation] = useState(adminLocation)
  console.log("Location after : ",location)
  const [day, setDay] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const yesterday=new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const today = new Date();
  today.setDate(today.getDate() + 6);
  const [endDate, setEndDate] = useState(today);
  const [search, setSearch] = useState('');
  const [active,setActive]=useState(true);
  const consentForms=['Aspen Laser','PRP_and_FI','Dermal Fillers Informed','Emsculpt Neo','Cryoskin','IVII','Oxygen Bar Informed','Compression Therapy','HydraFacial Informed'];
  const [showModal,setShowModal]=useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const [signature,setSignature]=useState(null);
  const [filter,setFilter]=useState(true);

  console.log(window.screen.width)
  useEffect(() => {
    const isShow = window.screen.width > 265 ? true : false
    setShow(isShow)
  }, [window.screen.width])

  useEffect(() => {
    // if(adminLocation)
    // setLocation(adminLocation);
    // setLocation('All'); 
  const fetchLocations = async () => {
      await getDocs(collection(db, "Locations")).then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          data.id = element.id;
          // console.log("data: ", element.id);
          if (data.active && data.name) {
            setLocations((arr) => [...arr, data.name]);
          }
        });
      });
    };
    fetchLocations();

    return function reset() {
      setLocations(['All']);
    };
  }, [])

  useEffect(()=>{
    if(!adminLocation)
    setLocation('All');
    if(active)
              setDay(new Date());
              else
              setDay(yesterday)
              setSearch('');
  },[active])

  const updateSelectedItem=(item)=>{
    setSelectedItem(item);
    if(item==='appointments')
    setSelect('clinic');
    else
    setSelect('');
  }

  const editSelection=(item)=>{
    setSelect(item);
    if(!adminLocation)
    setLocation('All');
    if(active)
    setDay(new Date());
    else
    setDay(yesterday)
              setSearch('');
              setActive(true);
              var isCF=consentForms.find(elm=>elm===item)
              console.log("iscf",isCF);
              if(isCF)
              setShowModal(true)
  }

  const uploadCF=()=>{
    const doc = new JsPDF('l','px',[1366, 728]);
            // doc.setFont('Inter-Regular', 'normal');
            console.log("Modal element: ",document.querySelector('.modal-body'))
            doc.setFillColor(0, 0,0,0);
            doc.rect(10, 10, 150, 160, "F");
            // if(signature)
            // doc.addImage(signature, 'png',200, 200, 1000, 400)
            //     window.open(doc.output('bloburl'), '_blank');
            // doc.save('test.pdf');
            
            doc.html(document.querySelector('.modal-body'), {
              async callback(doc) {
                // var signImg = document.getElementById("hydra_facial").toDataURL("image/png", 1.0);
                // const signImg=document.querySelector('bg_consentform8');
                const output=doc.output('arraybuffer');
                const metadata = {
                  contentType: 'application/pdf',
                };
                window.open(doc.output('bloburl'), '_blank');
                doc.save('test.pdf');
                const reportRef = ref(storage, 'ConsentForms/HydraFacial.pdf',metadata);
                // const uploadTask = uploadBytesResumable(reportRef, output);
        //         uploadTask.on(
        //           (error) => {
        //             //TODO:Handle Error
        //           },
        //           () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        // console.log("download url: ",downloadURL)
        //             });
        //           }
        //         );
              }
            });
  }

  const uploadCF_copy=()=>{
    // var doc = new JsPDF('l','px',[1366, 728]);
  // html2canvas(document.querySelector('.modal-body')).then(function(canvas){
  //   var imgData = canvas.toDataURL('image/png');
  //   var pageHeight = 190;  
  //   var imgWidth = 290 ; 
  //   var imgHeight = canvas.height * imgWidth / canvas.width;
  //   var heightLeft = imgHeight;
  //   var position = 5;

  //   doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //   heightLeft -= pageHeight;

  //   while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       doc.addPage();
  //       doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight; 
  //   }
  //   doc.output('arraybuffer');
  //   doc.save(Date.now() +'.pdf');
  // });

  // window.scrollTo(0, 0);
  var htmlRef=document.querySelector('.modal-body');
  // htmlRef.
  //     html2canvas(htmlRef, {
  //       allowTaint: true,
  //           useCORS: true,
  //           logging: false,
  //       scrollX: -window.scrollX,
  //       scrollY: 0,
  //       // height:htmlRef.scrollHeight,
  //       windowWidth: document.documentElement.offsetWidth,
  //       windowHeight: htmlRef.scrollHeight,
  //     }).then((canvas) => {
  //       const img = new Image();

  //       const imgData = canvas
  //         .toDataURL("image/png")
  //         .replace("image/png", "image/octet-stream");

  //       const pdf = new JsPDF("p", "mm", "a4");
  //       const imgProps = pdf.getImageProperties(imgData);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //       pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
  //       pdf.save();
  //     });

      // const input = document.querySelector('.modal-body');
      // const divHeight = input.clientHeight
      // const divWidth = input.clientWidth
      // const ratio = divHeight / divWidth;
    
      // html2canvas(input, { scale: '1' }).then((canvas) => {
      //   const imgData = canvas.toDataURL('image/jpeg');
      //   const pdfDOC = new JsPDF("l", "mm", "a0"); //  use a4 for smaller page
    
      //   const width = pdfDOC.internal.pageSize.getWidth();
      //   let height = pdfDOC.internal.pageSize.getHeight();
      //   height = ratio * width;
    
      //   pdfDOC.addImage(imgData, 'JPEG', 0, 0, width , height);
      //   pdfDOC.save('summary.pdf');   //Download the rendered PDF.
      // });

      const pdf = new JsPDF("p", "mm", "a4");

      html2canvas(document.querySelector('.modal-body'), {
        logging: true,
        allowTaint: false,
        useCORS: true,
        width: document.querySelector('.modal-body').scrollWidth,
        height: htmlRef.scrollHeight,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
      }).then((canvas) => {
        var imgWidth = 210;
        var pageHeight = 290;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
      
      
          
        var position = 0;
              const img = new Image();

        const imgData = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
        pdf.setLineWidth(5);
        pdf.setDrawColor(255, 255, 255);
        pdf.rect(0, 0, 210, 295);
        heightLeft -= pageHeight;
      
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          htmlRef.scrollTo(0,position)
          html2canvas(htmlRef,{
            logging: true,
        allowTaint: false,
        useCORS: true,
        // width: document.querySelector('.modal-body').scrollWidth,
        height: htmlRef.scrollHeight,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY
          }).then((internal_canvas) => {
            const internal_imgData = internal_canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
          pdf.addPage();
          pdf.addImage(internal_imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
          pdf.setLineWidth(5);
          pdf.setDrawColor(255, 255, 255);
          pdf.rect(0, 0, 210, 295);
        })
          heightLeft -= pageHeight;
        }
        pdf.save('file.pdf');
      
       });
  }

  const html_pdf_scroll=()=>{
    var htmlRef=document.querySelector('.modal-body');
    htmlRef.scrollTo(0,0);
    const pdf = new JsPDF("p", "mm", "a4");

        var pageHeight = htmlRef.clientHeight;
        var heightLeft = htmlRef.scrollHeight;      
          
        var position = 0;
    while (heightLeft >= 0) {
      html2canvas(document.querySelector('.modal-body'), {
        logging: true,
        allowTaint: false,
        useCORS: true,
        width: document.querySelector('.modal-body').scrollWidth,
        height: htmlRef.scrollHeight,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
      }).then((canvas) => {
      const img = new Image();
        const imgData = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      // pdf.setLineWidth(5);
      // pdf.setDrawColor(255, 255, 255);
      // pdf.rect(0, 0, 210, 295);
      position += pageHeight;
      heightLeft -= pageHeight;
      pdf.addPage();
      htmlRef.scrollTo(0,position);
      })
    }
    pdf.save('file.pdf');

    // var htmlRef=document.querySelector('.modal-body');
    // console.log(" out scrollHeight: ",htmlRef.scrollHeight)
    // var pageHeight=htmlRef.scrollHeight+htmlRef.clientHeight;
    // html2canvas(htmlRef, {
    //     allowTaint: true,
    //         useCORS: true,
    //         logging: false,
    //     scrollX: -window.scrollX,
    //     scrollY: -window.scrollY,
    //     // height:pageHeight,
    //     windowWidth: document.documentElement.offsetWidth,
    //     windowHeight:pageHeight,
    //   }).then((canvas) => {
    //     const img = new Image();

    //     const imgData = canvas
    //       .toDataURL("image/png")
    //       .replace("image/png", "image/octet-stream");

    //     const pdf = new JsPDF("p", "mm", "a4");
    //     const imgProps = pdf.getImageProperties(imgData);
    //     console.log("Page height: ",pageHeight)
    //     console.log("scrollHeight: ",canvas.height)
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //     pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    //     pdf.save();
    //   });
  }

  const html_pdf=()=>{
    var element = document.getElementById('custom-modal');
    const opt = {
      margin: 1,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2.5 },
      jsPDF: { unit: 'in', format: 'a1', orientation: 'portrait' },
  };
  // html2pdf()
  // .set(opt)
  // .from(element)
  // .save();

  html2PDF(element, {
    jsPDF: {
      format: 'b4',
    },
    imageType: 'image/jpeg',
    output: './pdf/generate.pdf'
  });

  }

  const onClose=()=>{
    var htmlRef=document.querySelector('.modal-body');
    // htmlRef.scrollTo(0,0)
    var elmHeight= Math.floor((htmlRef.scrollHeight)*0.26);
    const pdf = new JsPDF("p", "mm",[elmHeight, 297]);
      html2canvas(htmlRef, {
      // allowTaint: true,
      // useCORS: true,
      // logging: false,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      // height:htmlRef.scrollHeight,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: htmlRef.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight,'alias1','SLOW');
        // console.log('height: ',imgProps.height-pdfHeight)
        // console.log('height: ',imgProps.height)
        // pdf.addPage();
        // pdf.text(20,20,'In new page')
        // htmlRef.scrollTo(0,imgProps.height)

        const output=pdf.output('arraybuffer');
                const metadata = {
                  contentType: 'application/pdf',
                };
                window.open(pdf.output('bloburl'), '_blank');
                pdf.save('test.pdf');
                const reportRef = ref(storage, 'ConsentForms/AspenLaser.pdf',metadata);
                const uploadTask = uploadBytesResumable(reportRef, output);
                uploadTask.on(
                  (error) => {
                    //TODO:Handle Error
                  },
                  () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        console.log("download url: ",downloadURL)
                    });
                  }
                );
        // pdf.save();
      });
      // html2canvas(htmlRef, {
      //   // allowTaint: true,
      //   //     useCORS: true,
      //   //     logging: false,
      //   scrollX: -window.scrollX,
      //   scrollY: -window.scrollY,
      //   // height:htmlRef.scrollHeight,
      //   windowWidth: document.documentElement.offsetWidth,
      //   windowHeight: htmlRef.scrollHeight ,
      // }).then((internal_canvas) => {
      //   const internal_imgData = internal_canvas
      //     .toDataURL("image/png")
      //     .replace("image/png", "image/octet-stream");

      //   const imgProps = pdf.getImageProperties(internal_imgData);
      //   const pdfWidth = pdf.internal.pageSize.getWidth();
      //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      //   pdf.addImage(internal_imgData, "JPEG", 0, 0, pdfWidth, pdfHeight,'alias2','SLOW');
      //   pdf.save();
      // });
    }


    // mid working html_pdf solution
    const working_html_pdf=()=>{
    var htmlRef=document.querySelector('.modal-body');
    var scrollHeight=htmlRef.scrollHeight;
    var position=0;
    window.scrollTo(0, 0);

      // html2canvas(htmlRef, {
      //   scrollX: -window.scrollX,
      //   scrollY: -window.scrollY,
      //   windowWidth: document.documentElement.offsetWidth,
      //   windowHeight: htmlRef.scrollHeight,
      // }).then((canvas) => {
      //   const img = new Image();
      //   img.src
      //   const imgData = canvas
      //     .toDataURL("image/png")
      //     .replace("image/png", "image/octet-stream");

      //   const pdf = new JsPDF("p", "mm", "a4");
      //   const imgProps = pdf.getImageProperties(imgData);
      //   const pdfWidth = pdf.internal.pageSize.getWidth();
      //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      //   pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      //   pdf.save();
      // });

      const pdf = new JsPDF("p", "mm", "a4");
      while(position<=scrollHeight){
        html2canvas(htmlRef).then((canvas) => {
          const img = new Image();
          const imgData = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
  
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
          htmlRef.scrollTo(0,imgProps.height)
          position+=imgProps.height;
        });
        pdf.addPage()
      }
      pdf.save();
    }

  return (<>
    <Row style={{ margin: '0px' }} className='menu-row'>
    <Col
        xs="2"
        md='1'
        lg="1"
        // className="menu-col"
        style={{ padding: '15px 0' }}>
          <div className="left-menu-item" style={{marginTop:'45px',
          borderLeft:selectedItem==='chat'?'3px solid #02704A':''}}
          onClick={()=>updateSelectedItem('chat')}>
          <img
                      src="../assets/icons8-chat-message-50.png"
                      className="left-menu-icon"
                      alt="logo"
                    />
                    <div className="left-menu-text">Chat</div>
          </div>
          <div className="left-menu-item"
          style={{borderLeft:selectedItem==='locations'?'3px solid #02704A':''}}
           onClick={()=>updateSelectedItem('locations')}>
          <img
                      src="../assets/icons8-location-50.png"
                      className="left-menu-icon"
                      alt="logo"
                    />
                    <div className="left-menu-text">Locations</div>
          </div>
                    
                    <div className="left-menu-item"
                    style={{borderLeft:selectedItem==='providers'?'3px solid #02704A':''}}
                     onClick={()=>updateSelectedItem('providers')}>
                    <img
                      src="../assets/icons8-doctor-64-1.png"
                      className="left-menu-icon"
                      alt="logo"
                    />
                    <div className="left-menu-text">Providers</div>
                    </div>
                    <div className="left-menu-item"
                    style={{borderLeft:selectedItem==='users'?'3px solid #02704A':''}}  
                    onClick={()=>updateSelectedItem('users')}>
                    <img
                      src="../assets/icons8-person-50.png"
                      className="left-menu-icon"
                      alt="logo"
                    />
                    <div className="left-menu-text">Users</div>
                    </div>
                    <div className="left-menu-item"
                    style={{borderLeft:selectedItem==='appointments'?'3px solid #02704A':''}}  
                    onClick={()=>updateSelectedItem('appointments')}>
                    <img
                      src="../assets/icons8-appointment-64.png"
                      className="left-menu-icon"
                      alt="logo"
                    />
                    <div className="left-menu-text">Appointments</div>
                    </div>
                    <div className="left-menu-item"
                    style={{borderLeft:selectedItem==='services'?'3px solid #02704A':''}}  
                    onClick={()=>updateSelectedItem('services')}>
                    <img
                      src="../assets/icons8-medical-service-67.png"
                      className="left-menu-icon"
                      alt="logo"
                    />
                    <div className="left-menu-text">Services</div>
                    </div>
                    <div className="left-menu-item"
                    style={{borderLeft:selectedItem==='consent forms'?'3px solid #02704A':''}}  
                    onClick={()=>updateSelectedItem('consent forms')}>
                    <img
                      src="../assets/icons8-appointment-64.png"
                      className="left-menu-icon"
                      alt="logo"
                    />
                    <div className="left-menu-text">Consent Forms</div>
                    </div>
                    <div className="left-menu-item"
                    style={{borderLeft:selectedItem==='consent forms'?'3px solid #02704A':''}}  
                    onClick={()=>navigate("/")}>
                    <img
                      src="../assets/icons8-logout-50.png"
                      className="left-menu-icon"
                      alt="logo"
                    />
                    <div className="left-menu-text">Logout</div>
                    </div>
                    
          </Col>
      {show && <Col
        xs="3"
        md='3'
        lg="2"
        className="menu-col"
        style={{ padding: '15px 10px' }}>
        <img src="../assets/logo.png" className="navbar-logo" alt="logo" />
        <div style={{ marginTop: '10px' }}>
        {selectedItem==='chat' && <Sidebar/>}
          {!adminLocation && <>
            <div className="menu-item">Locations</div>
          <div className={"sub-item" + (select === 'location' ? ' selected' : '')}
            onClick={() => editSelection('location')}>Info</div></>}
          {selectedItem==='locations' && <div className={"sub-item" + (selectedItem === 'locations' ? ' selected' : '')}>Info</div>}
          {selectedItem==='providers' && <div className={"sub-item" + (selectedItem === 'providers' ? ' selected' : '')}>Info</div>}
          {selectedItem==='users' && <div className={"sub-item" + (selectedItem==='users' ? ' selected' : '')}>Info</div>}
          {selectedItem==='appointments' && <div><div className={"sub-item" + (select === 'clinic' ? ' selected' : '')}
            onClick={() => editSelection('clinic')}>Clinic</div>
          <div className={"sub-item" + (select === 'medspa' ? ' selected' : '')}
            onClick={() => editSelection('medspa')}>MedSpa</div>
          <div className={"sub-item" + (select === 'covid' ? ' selected' : '')}
            onClick={() => editSelection('covid')}>Covid</div>
          <div className={"sub-item" + (select === 'telemedicine' ? ' selected' : '')}
            onClick={() => editSelection('telemedicine')}>TeleMedicine</div></div>}
          {selectedItem==='services' && <div className={"sub-item" + (selectedItem==='services' ? ' selected' : '')}
            onClick={() => editSelection('service')}>Info</div>}
          {selectedItem==='consent forms' && <div><div className={"sub-item" + (select === 'Aspen Laser' ? ' selected' : '')}
            onClick={() => editSelection('Aspen Laser')}>Aspen Laser</div>
            <div className={"sub-item" + (select === 'PRP_and_FI' ? ' selected' : '')}
            onClick={() => editSelection('PRP_and_FI')}>PRP_and_FI</div>
            <div className={"sub-item" + (select === 'Dermal Fillers Informed' ? ' selected' : '')}
            onClick={() => editSelection('Dermal Fillers Informed')}>Dermal Fillers Informed</div>
            <div className={"sub-item" + (select === 'Emsculpt Neo' ? ' selected' : '')}
            onClick={() => editSelection('Emsculpt Neo')}>Emsculpt Neo</div>
            <div className={"sub-item" + (select === 'Cryoskin' ? ' selected' : '')}
            onClick={() => editSelection('Cryoskin')}>Cryoskin</div>
            <div className={"sub-item" + (select === 'IVII' ? ' selected' : '')}
            onClick={() => editSelection('IVII')}>IVII</div>
            <div className={"sub-item" + (select === 'Oxygen Bar Informed' ? ' selected' : '')}
            onClick={() => editSelection('Oxygen Bar Informed')}>Oxygen Bar Informed</div>
            <div className={"sub-item" + (select === 'Compression Therapy' ? ' selected' : '')}
            onClick={() => editSelection('Compression Therapy')}>Compression Therapy</div>
            <div className={"sub-item" + (select === 'HydraFacial Informed' ? ' selected' : '')}
            onClick={() => editSelection('HydraFacial Informed')}>HydraFacial Informed</div></div>}
        </div>
      </Col>}
      <Col
        xs="7"
        md='8'
        lg={!show ? "11" : "9"}
        className="content-col"
        style={{ paddingLeft: '30px',height:'100%',overflow:'hidden' }}>

        <img src="../assets/icons8-menu-rounded-50.png" className="menu-logo" alt="logo" onClick={() => {
          uploadCF();
          setShow(!show)}} />
        {(active && filter && select === 'appointment' || select === 'clinic' || select === 'medspa' || select === 'covid' || select === 'telemedicine') ? <DatePicker
          minDate={active?startDate:null}
          maxDate={active?endDate:yesterday}
          selected={day}
          onChange={(date) => setDay(date)}
          wrapperClassName='date-picker'
        /> : ''}
        {(!adminLocation && filter && !(select === 'location' || select === 'services')) ? <Form.Select style={{ width: 'auto', display: 'initial', marginLeft: '5%' }}
          value={location} onChange={(e) => setLocation(e.target.value
          )}>
          {locations.map(item => <option>{item}</option>)}
        </Form.Select> : ''}
        {selectedItem!=='chat' && filter && <input type={'search'} placeholder='Search...' className="appointment-search"
          onChange={(e) => setSearch(e.target.value)} value={search} />}
        {selectedItem === 'locations' ? <LocationsPage search={search} active={active} setActive={setActive}/> : 
        selectedItem === 'providers' ? <ProvidersPage search={search} location={location} active={active} setActive={setActive} setFilter={setFilter} filter={filter}/> :
         selectedItem === 'users' ? <UsersPage search={search} location={location} active={active} setActive={setActive}/> :
          select === 'clinic' ? <AppointmentsPage type='clinic' search={search} location={location} date={day} active={active} setActive={setActive}/> : 
          select === 'medspa' ? <AppointmentsPage type='medspa' search={search} location={location} date={day} active={active} setActive={setActive}/> : 
          select === 'covid' ? <AppointmentsPage type='covid' search={search} location={location} date={day} active={active} setActive={setActive}/> : 
          select === 'telemedicine' ? <AppointmentsPage type='telemedicine' search={search} location={location} date={day} active={active} setActive={setActive}/> :
          selectedItem === 'chat' ? <Chat/> :
          selectedItem === 'services' ? <ServicesPage search={search}/> : ''
          }
        {/* {select==='provider'?<ProvidersPage/>:<AppointmentsPage/>} */}
      </Col>
      <Modal show={showModal} onHide={()=>{
        setShowModal(false);
        setSelect('provider')}} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>Consent Form</Modal.Title>
        </Modal.Header>
        <Modal.Body id='custom-modal'>
          {console.log("Modal element: ",document.querySelector('.modal-body'))}
          {select === 'Aspen Laser'?<AspenLaserCF/>:select === 'PRP_and_FI'?<PRP_and_FI_CF/>:
          select === 'Dermal Fillers Informed'?<DermalFillersInformedCF/>:
          select === 'Emsculpt Neo'?<EmsculptNeoCF/>:
          select === 'Cryoskin'?<CryoskinCF/>:select === 'IVII'?<IVII_CF/>:
          select === 'Oxygen Bar Informed'?<OxygenBarInformedCF/>:
          select === 'Compression Therapy'?<CompressionTherapyCF/>:<AspenLaserCF setSignature={setSignature}/>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{
            onClose();
            // doc.html(document.querySelector('.modal.show .modal-dialog')).then(() => {
            //   doc.save('report.pdf');
            //     const reportRef = ref(storage, 'ConsentForms/report.pdf');
            //     console.log("reportRef: ",reportRef)
            // });
            // setShowModal(false);
            setSelect('provider')}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  </>);
}


// name
// email
// gender
// DOB
// location
// photo
// specialization
// phone

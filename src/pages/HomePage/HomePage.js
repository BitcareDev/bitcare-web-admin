import React, { useEffect, useState } from "react";
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     Container, Row, Col, Form, Input, Button, Navbar, Nav,
//     NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//     DropdownToggle, DropdownMenu, DropdownItem
//   } from 'reactstrap';
// import logo from '../../../public/assets/logo.png';
import Button from 'react-bootstrap/Button';
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

export default function Home() {
    const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg'
    const [show,setShow]=useState(true);
    const [select,setSelect]=useState('provider');

    console.log(window.screen.width)
    useEffect(()=>{
      const isShow=window.screen.width>265? true:false
      setShow(isShow)
    },[window.screen.width])
  return (<>
  {/* <h1>Welcome to Bitacre</h1> */}
  {/* <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav> */}
{/* <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
    
    <Container>
      <Row noGutters className="position-relative w-100 align-items-center">
      
        <Col className="d-none d-lg-flex justify-content-start">
          <Nav className="mrx-auto" navbar>
          
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">
                <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
              </NavLink>
            </NavItem>
            
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">Home</NavLink>
            </NavItem>
            
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">Electronics</NavLink>
            </NavItem>
            
            <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
              <DropdownToggle className="font-weight-bold" nav caret>fashion</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Men</DropdownItem>
                <DropdownItem>Women</DropdownItem>
                <DropdownItem>Baby and Kids</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
          </Nav>
        </Col>
        
        <Col className="d-flex justify-content-xs-start justify-content-lg-center">
          <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
            <img src='../../../public/assets/logo.png' alt="logo" className="position-relative img-fluid" />
          </NavbarBrand>
        </Col>
        
        <Col className="d-none d-lg-flex justify-content-end">
          <Form inline>
            <Input type="search" className="mr-3" placeholder="Search React Courses" />
            <Button type="submit" color="info" outline>Search</Button>
          </Form>
        </Col>
        
      </Row>
    </Container>
    
  </Navbar> */}
  {/* xs="12"
          md
          lg="6" */}
  {/* {[false, 'xxl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
      <Row style={{margin:'0px'}} className='menu-row'>
        {show && <Col
        xs="5"
        md='4'
        lg="3"
        className="menu-col"
        style={{paddingLeft:'20px'}}>
        <img src="../assets/logo.png" className="navbar-logo" alt="logo"/>
        <div style={{marginTop:'10px'}}>
            <div className="menu-item">Providers</div>
            <div className={"sub-item"+(select==='provider'?' selected':'')}
            onClick={()=>setSelect('provider')}>Info</div>
            <div className="menu-item">Users</div>
            <div className={"sub-item"+(select==='user'?' selected':'')}
            onClick={()=>setSelect('user')}>Info</div>
            <div className="menu-item">Appointments</div>
            <div className={"sub-item"+(select==='appointment'?' selected':'')}
            onClick={()=>setSelect('appointment')}>All</div>
            <div className={"sub-item"+(select==='clinic'?' selected':'')}
             onClick={()=>setSelect('clinic')}>Clinics</div>
            <div className={"sub-item"+(select==='medspa'?' selected':'')}
             onClick={()=>setSelect('medspa')}>MedSpa</div>
            <div className={"sub-item"+(select==='covid'?' selected':'')}
            onClick={()=>setSelect('covid')}>Covid</div>
            <div className={"sub-item"+(select==='telemedicine'?' selected':'')}
            onClick={()=>setSelect('telemedicine')}>TeleMedicine</div>
        </div>
        </Col>}
        <Col
        xs="7"
        md='8'
        lg={!show?"12":"9"}
        className="content-col"
        style={{paddingLeft:'30px'}}>
        <img src="../assets/icons8-menu-rounded-50.png" className="menu-logo" alt="logo" onClick={()=>setShow(!show)}/>
        {select==='provider'?<ProvidersPage/>:select==='user'?<UsersPage/>:select==='appointment'?<AppointmentsPage type='all'/>:select==='clinic'?<AppointmentsPage type='clinic'/>:select==='medspa'?<AppointmentsPage type='medspa'/>:select==='covid'?<AppointmentsPage type='covid'/>:<AppointmentsPage type='telemedicine'/>}
        {/* {select==='provider'?<ProvidersPage/>:<AppointmentsPage/>} */}
        </Col>
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

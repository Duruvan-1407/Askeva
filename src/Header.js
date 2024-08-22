import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import pic4 from './pic4.png';
class Header extends Component{
    render(){
        return<>
            <Navbar expand="lg">
                    <Navbar.Brand href="askeva" className="ask"><img src={pic4} alt='askeva' className='pic4'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='bar mt-3 mb-5'>
                            <NavDropdown className='title' title="Features" id='basic-nav-dropdown'>
                                <NavDropdown.Item href='#'>Whatsapp API Chatbot</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Whatsapp Automation</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Whatsapp E-Commerce</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Whatsapp Customer Support</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='title' title="Case Studies" id='basic-nav-dropdown'>
                                <NavDropdown.Item href='#'>Education</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Health</NavDropdown.Item>
                                <NavDropdown.Item href='#'>HR</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Automobile</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Real Estate</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Travel & Hospitality</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Insurance</NavDropdown.Item>
                                <NavDropdown.Item href='#'>E-Commerce</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Retails</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='title' title="Company" id='basic-nav-dropdown'>
                                <NavDropdown.Item href='#'>About Us</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Contact Us</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='title' href='#'>Partner Program</Nav.Link>
                            <Nav.Link className='title' href='#'>Career</Nav.Link>
                            <button className='login' href='#'>Login</button>
                            <button className='getapi' href='#'>Get API</button>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/" element={<Page1 />} />
            </Routes>
        </>
    }
}
export default Header
import React from 'react';
import { Container, Nav , Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import '../../components/Header/header.css';
import { NavLink } from 'react-router-dom';


function Header() {

  

  return (
    <>
    <Navbar expand="lg" className="bg-black header fixed" >
      <Container>
        <Navbar.Brand href="#home"><img alt='logo' className='logo' src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" dir='rtl'>
            <NavLink to={'/'} className='text-white fw-bold '>الرئيسية</NavLink>
            <NavLink to={'/about'} className='text-white fw-bold' >من نحن</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;
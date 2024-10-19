import React from 'react';
import '../Footer/footer.css';
import logo from '../../images/logo.png';
import ScrollToTop from "react-scroll-to-top";


import { Container, Row, Col, Navbar , Nav } from 'react-bootstrap';

function Footer() {
  return (
    <>
    <div className='footer'>
      
      <Container className=''>
      <Row>
      <Col  md={4} className='my-auto py-3'>
      <Navbar.Brand href="/"><img alt='logo' className='logo' src={logo} /></Navbar.Brand>
      </Col>

      <Col  md={4} className='my-auto py-3'>
      <h4>اتصل بنا</h4>
      <p dir='rtl'><i class="fa-solid fa-location-dot"></i> 40 شارع عثمان بن عفان - ميدان الاسماعيلية - مصر الجديدة</p>
      <p>01123456789 <i class="fa-solid fa-phone-flip"></i> </p>
      <p>khatwat@gmail.com <i class="fa-solid fa-envelope"></i> </p>
      </Col>

      <Col md={4} className='my-auto py-3'>
      <h4>روابط سريعة</h4>
        <Nav.Link className='text-white  mx-auto' href="/">الرئيسية</Nav.Link>
        <Nav.Link className='text-white mx-auto' href="/about">من نحن</Nav.Link>
      </Col>
      </Row>
      </Container>
      <ScrollToTop smooth top='200' color='black' className='scroll'/>
    </div>
    </>
  )
}

export default Footer;
import React from 'react';
import '../Vision/vision.css';
import SubTitle from '../SubTitle/SubTitle';
import { Container , Row , Col} from 'react-bootstrap';
import  vissionImg  from "../../images/vission.jpg";



function Vision() {



  return (
     <>
   <div className='vision'>
    <SubTitle title='الرؤية'/>

    <Container className='vision-content'>
    <Row>
      <Col className='my-auto' data-aos="fade-up" lg={6}>
      <img className='w-100 rounded-5' src={vissionImg} alt='vission'/>
      </Col>
      <Col className='my-auto' data-aos="fade-down" lg={6}>
      <h3 className='my-auto pt-4 text-center text-md-end'>نسعى لأن نكون الشركة الرائدة في مجال التعدين في المنطقة العربية، من خلال الاستثمار في التكنولوجيا المتطورة، والاعتماد على فريق من أفضل الخبراء، لضمان استخراج المعادن النفيسة بأعلى كفاءة ومسؤولية</h3>
      </Col>
    </Row>
    </Container>
   </div>
     </>
  )
}

export default Vision;
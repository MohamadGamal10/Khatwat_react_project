import React from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import SubTitle from '../SubTitle/SubTitle';
import  missionImg  from "../../images/mission.jpg";
import '../Mission/mission.css';



function Mission() {
  return (
    <div className='mission'>
    <SubTitle title='المهام'/>

    <Container className='mission-content'>
    <Row className='flex-md-row-reverse'>
    <Col className='my-auto' data-aos="flip-right" lg={6}>
    <img className='w-100 rounded-5' src={missionImg} alt='mission'/>
    </Col>

    <Col className='my-auto' data-aos="flip-left"  lg={6}>
       <ul className='text-end pt-md-4' dir='rtl'>
       <li>استكشاف واستخراج المعادن النفيسة من مختلف المواقع في المنطقة العربية.</li>
       <li>
       استخدام أحدث التقنيات والوسائل لضمان استخراج المعادن بأعلى كفاءة ومسؤولية.
       </li>
       <li>الالتزام بأعلى معايير السلامة والبيئة في جميع عملياتنا.
       </li>
       <li>
       بناء علاقات قوية مع شركائنا ومجتمعاتنا المحلية.
       </li>

       </ul>
    </Col>
    </Row>
    </Container>
   </div>
  )
}

export default Mission;
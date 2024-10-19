import React from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import  goalImg  from "../../images/goals.jpg";
import SubTitle from '../SubTitle/SubTitle';
import '../Goals/goals.css';

function Goals() {
  return (
    <div className='goals'>
    <SubTitle title='الأهداف'/>

    <Container className='goals-content'>
    <Row>
      <Col className='my-auto'  data-aos="fade-up" lg={6}>
      <img className='w-100 rounded-5' src={goalImg} alt='goals'/>
      </Col>
      <Col className='my-auto' data-aos="fade-down" lg={6}>
       <ul dir='rtl'>
       <li>تحقيق أعلى عائد على الاستثمار لمساهمينا.</li>
       <li>توفير فرص العمل للشباب العربي.</li>
       <li>المساهمة في تنمية الاقتصاد الوطني.</li>
       <li>أن نكون نموذجًا يحتذى به في مجال التعدين المسؤول.</li>
       </ul>
      </Col>
    </Row>
    </Container>
   </div>
  )
}

export default Goals;
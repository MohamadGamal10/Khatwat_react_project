import React from "react";
import "../../components/AboutContent/aboutContent.css";
import { Container, Row, Col } from "react-bootstrap";
import khatwatImg from "../../images/khatwat.jpg";
import SubTitle from "../SubTitle/SubTitle";

function AboutContent() {
  return (
    <>
      <div className="about">
        <div className="hover">
          <h1>من نحن</h1>
        </div>
      </div>

      <Container className="about-content">
        <SubTitle title="لماذا تختار خطوات؟" />
        <Row>
          <Col className="mt-4" lg={6}  data-aos="fade-up">
            <img className="w-100 rounded-1" src={khatwatImg} alt="vission" />
          </Col>
          <Col className="my-auto" lg={6}  data-aos="fade-down">
            <h3 className="my-auto pt-4 text-center text-md-end" dir="rtl">
              تأسست شركة خطوات عام 2023 برؤية واضحة لتصبح رائدة في مجال استخراج
              المعادن النفيسة، ونلتزم بتقديم خدمات التعدين بأعلى معايير الجودة
              والكفاءة.
            </h3>
            <ul dir="rtl">
              <li>نتمتع بخبرة واسعة في مجال التعدين.</li>
              <li>نستخدم أحدث التقنيات والوسائل.</li>
              <li>نلتزم بأعلى معايير السلامة والبيئة.</li>
              <li>نقدم خدماتنا بأسعار تنافسية.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutContent;

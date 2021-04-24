import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="저는 누구일까요?" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    '첫 사회생활은 해양플랜트 제조현장에서 외국인 선주와 통역 및 안전업무를 하였습니다. 이후 우여곡절을 거치며 해외에 머물다, 개발을 배우고 싶어 귀국 후, 국비 지원교육으로 처음 코딩을 배우며 IT인력으로서의 성장방향을 정했습니다. 교육원 수료 후 취업이 되어 시스템 관리자로 일하였습니다.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '일은 다소 단순한 DB 검색 및 유지보수 등의 경영지원 사무업무 뿐이라 5년 후의 제 모습이 기대되지 않았습니다. 개인의 성장을 원하여 이직을 생각하였지만 요즘 이슈인 직고용 대상기업 중 하나였기에 회사내부 사정과 맞물려 퇴사를 결정하게 되었습니다. 이후 Front 개발을 배우고 있습니다.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || '남들보다 시작이 늦은 만큼, 마음이 급하지만 마음만 앞선다고 성장이 빠를 순 없기에 클론코딩등으로 큰 틀을 익힌 후에, HTML, CSS, JS, REACT 하나하나 신경써서 배우고 있습니다.  더 상세한 이력서는 메일로 요청해주세요 sbbt@naver.com'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      RESUME 이력서 보기
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {NavLink, withRouter, useHistory} from "react-router-dom";
import NavBar from './Navbar';
import '../assets/styles/homepg.scss';
import HeroImg from '../assets/img/carhero1.png';
import DHomeCar from '../assets/img/homeCarmodel.png';
import Dealerlogo from '../assets/img/newsletterSVGLogoSubaru.svg';
import Logo from "../assets/img/sublogo.svg";


function Home () {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  let history = useHistory();
  function goHome() {
    history.push("/");
  };

    return(
        <>
        <div className="homeWrapper">
          <div className="introWrapper">
            <Row className="introText">
              <Col md={6} className="textHeader">
                <h1>The 2021 <br/>Subaru Impreza</h1>
              </Col>
              <Col md={6} className="textSubheader">
                <h2>More than a car Its a Subaru</h2>
              </Col>
            </Row>
            <Row className="carHero">
              <img src={HeroImg} alt="gray subaru car"/>
              <div className="bgText">
                <p>Impreza</p>
              </div>
            </Row>
          </div>

          <div className="sectionWrapper">
            <Row className="APRWrapper">
              <Col lg={5}>
              <h2>
                <span className="Zeropercent">0% APR</span>
                <br/>
                Financing for 63 mos. 
              </h2>
              </Col>
              <Col lg={5}>
              <h4>The 2021 Subaru Imperza comes With EyeSight and Steering Responsize Headlights & 0% APR Financing for 63 mos.</h4>
              <div className="buttonApr">
              <Link to="">
                <div className="btnOutline">
                  Test Drive on Today
                </div>
              </Link>
              </div>
              </Col>
            </Row>
          </div>

          <div className="sectionWrapper">
            <Row className="cardsSectionHome">
              <Col lg={2} className="cardContent">
                <p>Starting at MSRP</p>
                <h3 className="smallerText">$18,795</h3>
              </Col>
              <Col lg={2} className="cardContent">
                <p>MPG up to</p>
                <h3 className="smallerText">36/28</h3>
                <p>Hwy/City</p>
              </Col>
              <Col lg={2} className="cardContent">
                <p>Passenger volume up to</p>
                <h3 className="smallerText">$18,795</h3>
                <p>Cubic Ft.</p>
              </Col>
              <Col lg={2} className="cardContent">
                <p>Standard</p>
                <h3>Symmetrical All-Wheel Drive</h3>
              </Col>
            </Row>
          </div>

          <div className="sectionWrapper">
            <Row noGutters className="testDrive">
              <Col md={6} className="testDriveTxt">
              <h3>Find the Impreza that’s right for you.</h3>
              <p>Engineered for All the Miles Ahead. Chose between Sedan body style or a 5-door body style</p>
              <br/>
              <Link to="">
                <div className="btnPrimary">
                  Test Drive on Today
                </div>
              </Link>
              <br/>
              <Link to="">
                <div className="btnOutline">
                  View Gallery
                </div>
              </Link>
              </Col>
              <Col md={6} className="dhomeCar">
                <img src={DHomeCar} alt="black Imperza" className="carimg"/>
              </Col>
            </Row>
          </div>

          <div className="sectionWrapper">
            <div className="quoteHome">
              <h3>“The Impreza’s unbeatable combination of safety, reliability, capability, and affordability is hard to pass up.”</h3>
              <p>Kelley Blue Book's</p>
            </div>
            <Row className="quoteCardsHome">
              <Col lg={4} className="cardContent">
                <h3>Best Resell Value</h3>
                <p>The Best Resale Value in it class for two years running according to Kelly Blue Books</p>
              </Col>
              <Col lg={4} className="cardContent">
                <h3>IIHS Top Safety Pick</h3>
                <p>The 2021 Subaru Impreza has EyeSight and Steering Responsize Headlights </p>
              </Col>
              <Col lg={4} className="cardContent">
                <h3>#1 Brand Loyalty</h3>
                <p>The Best Resale Value in it class for two years running according to Kelly Blue Books</p>
              </Col>
            </Row>
          </div>

          <Row className="findDealerHome">
              <Col lg={6} className="dealerMap">
              <h3>Shop Impreza</h3>
              <p>Find a Dealership Near You</p>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-5">
                  <Form.Group as={Col} controlId="validationCustom05">
                    <Form.Control className="zipCodebox" type="text" style={{fontSize: '1.5em'}}placeholder="Your zip code" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <a href="">
                <div className="btnPrimary">
                  Test Drive on Today
                </div>
                </a>
              </Form>

              </Col>
              <Col lg={6} className="dealerLogo">
                <img src={Dealerlogo} alt='Subaru Logo Half'/>
              </Col>
            </Row>
        </div>
        </>
    );
};

export default Home;

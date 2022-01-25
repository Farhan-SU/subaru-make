import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import '../assets/styles/allCars.scss';
import {Row, Col, Form, Button} from 'react-bootstrap';
import Logo from "../assets/img/sublogo.svg";
import AllCarHeader from "../assets/img/carHorizontal.png";
import BlueSedan from "../assets/img/sedanBlue.png"
import RedSedan from "../assets/img/sedanRed.png"

function Home () {



    return(
        <>
        <div className="allVechWrapper">
          <Row noGutters className="allcarHeader">
            <Col md={7}>
              <h3>Engineered for All the Miles Ahead.</h3>
              <p>With 0% APR Financing for 63 mos. it is the perfect time for a Subaru. 
                <br/>
                <em>Explore all the options below</em></p>
            </Col>
            <Col md={4} className='allCarsBanner'>
              <img src={AllCarHeader} alt="sliver Imperza"/>
            </Col>
          </Row>
          <div className='carClass'>
            <div className='carSedan'>
              <div className='carCardAll'>
                <Row noGutter={true} className='carcardInner'>
                  <Col lg={4} className='sedanText'>
                    <h3>Sedan</h3>
                    <h4>Starting at $18,795</h4>
                  </Col>
                  <Col lg={7}>
                    <img src={BlueSedan} alt="sliver Imperza"/>
                  </Col>
                </Row>
              </div>
            </div>
            <div className='carSedan'>
              <div className='carCardAll'>
                <Row noGutter={true} className='carcardInner'>
                <Col lg={4} className='sedanText'>
                    <h3>5-Door</h3>
                    <h4>Starting at $19,295</h4>
                  </Col>
                  <Col lg={7}>
                    <img src={RedSedan} alt="sliver Imperza"/>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};

export default Home;

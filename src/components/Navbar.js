import React from 'react';
import {NavLink, withRouter, useHistory} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/styles/layout.scss";
import Logo from "../assets/img/sublogo.svg";


function HeaderNav() {

  let history = useHistory();
  function goHome() {
    history.push("/");
  };

  return (
   <Row className='layoutwrapper'>
    <Col lg={6} className="logoCol">
    <NavLink className="logoNavBox" exact to="/" onClick={goHome}>
    <img src={Logo} alt="logo" />
    </NavLink>
    </Col>
    <Col lg={6} className="linkCol">
      <Row className="linkRow">
        <Col data-order="1" className="linkBoxNav">
          <NavLink to="/special-deals" exact className="navlinks" >Special Deals</NavLink>
        </Col>
        <Col data-order="2" className="linkBoxNav">
          <NavLink to="/dealership" exact className="navlinks" >Dealership</NavLink>
        </Col>
        <Col data-order="3" className="linkBoxNav">
          <NavLink to="/all-vechicals" className="navlinks" >All Vechicals</NavLink>
        </Col>
        <Col data-order="4" className="linkBoxNav">
          <NavLink to="/support" exact className="navlinks" >Support & FAQ</NavLink>
        </Col>
      </Row>
    </Col>
  </Row>
  );
}

export default HeaderNav;


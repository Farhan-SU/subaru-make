import React from 'react';
import { Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {NavLink, useHistory} from "react-router-dom";
import Logo from "../assets/img/sublogo.svg";
import "../assets/styles/layout.scss";


function Footer () {

  let history = useHistory();
  function goHome() {
    history.push("/");
  };

    return(
        <>
          <footer>
          <hr/>
          <Row className='layoutwrapper'>
            <Col lg={6} className="logoCol">
              <NavLink className="logoNavBox" exact to="/" onClick={goHome}>
              <img src={Logo} alt="logo" />
              </NavLink>
              <h5><em>More than a car Its a Subaru</em></h5>
              </Col>
              <Col lg={6} className="linkCol">
                <h6>Helpful Links</h6>
                <hr/>
                <Row className="linkRow">
                  <Col data-order="1" className="linkBoxNav">
                    <NavLink to="/gallery" exact className="navlinks" activeStyle={{color: "#875dfa"}}>Special Deals</NavLink>
                  </Col>
                  <Col data-order="2" className="linkBoxNav">
                    <NavLink to="/aboutus" exact className="navlinks" activeStyle={{color: "#875dfa"}}>Find a Dealership</NavLink>
                  </Col>
                  <Col data-order="3" className="linkBoxNav">
                    <NavLink to="/agency" className="navlinks" activeStyle={{color: "#875dfa"}}>All Vechicals</NavLink>
                  </Col>
                  <Col data-order="4" className="linkBoxNav">
                    <NavLink to="/press" exact className="navlinks" activeStyle={{color: "#875dfa"}}>Support & FAQ</NavLink>
                  </Col>
                </Row>
              </Col>
            </Row>
          </footer>
        </>
    );
};

export default Footer;

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {withRouter} from "react-router-dom";
import '../assets/styles/layout.scss';

function LayoutWrapper(props) {

   return (
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        {props.children}
    </main>  
    <footer>
        <Footer/>
    </footer>
    </>
   );
 };
 export default withRouter(LayoutWrapper);
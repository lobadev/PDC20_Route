import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyHome from './MyHome';
import MyProfile from './MyProfile';
import Nav from './Nav';
import ContactUs from './ContactUs';

function Routing(){
    return (
        <Router>
            <Nav /> 
            <div className="container-fluid  mt-3 mr-0 ml-0"> 
                <Routes>
                    <Route path="/" element={<MyHome />} />
                    <Route path="/profile" element={<MyProfile />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </div>
        </Router>


    );
}

export default Routing;
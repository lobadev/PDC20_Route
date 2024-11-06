import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

const MyHome = () => {
    return (
        <div id="home" className="home-area container-fluid">
            {/* Hero Section */}
            <section className="hero-section text-center text-light d-flex align-items-center" style={{ backgroundColor: '#881703   ', height: '90vh' }}>
                <div className="container-fluid">
                    <h1 className="display-4">Welcome to My Homepage</h1>
                    <p className="lead">Explore our use of Router, Routes, Route and Link!</p>
                    <div className="mt-4">
                        <a href="#services" className="btn btn-light mx-2">Our Services</a>
                        <a href="#cta" className="btn btn-outline-light mx-2">Get Started</a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="services" className="features-area section-padding">
                <div className="container">
                    <br/>
                    <br/>
                    <div className="section-title text-center mb-5">
                        <h2 className="text-danger">What We Offer</h2>
                        <p>Explore our core offerings designed to help you succeed.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card shadow-sm border-0">
                                <div className="card-body text-center">
                                    <i className="fa fa-rocket fa-3x text-danger mb-3"></i>
                                    <h5 className="card-title">Our Mission</h5>
                                    <p className="card-text">We strive to deliver the best service possible and help you reach your goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card shadow-sm border-0">
                                <div className="card-body text-center">
                                    <i className="fa fa-heart fa-3x text-danger mb-3"></i>
                                    <h5 className="card-title">Our Vision</h5>
                                    <p className="card-text">Building a community that values quality and connection.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card shadow-sm border-0">
                                <div className="card-body text-center">
                                    <i className="fa fa-users fa-3x text-danger mb-3"></i>
                                    <h5 className="card-title">Get Involved</h5>
                                    <p className="card-text">Join us and be part of a growing family of passionate individuals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="cta" className="cta-section text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h3 className="text-danger">Ready to Start Your Journey with Us?</h3>
                    <p>Get in touch today and see how we can help you achieve your goals.</p>
                    <a href="#contact" className="btn btn-danger">Get Started</a>
                </div>
            </section>
        </div>
    );
};

export default MyHome;

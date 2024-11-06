import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

const MyProfile = () => {
    return (
        <div id="profile" className="profile-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="profile-sidebar text-center p-4">
                        <img src="https://media.licdn.com/dms/image/v2/D4E03AQHaKuqb03boMQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697433775478?e=2147483647&v=beta&t=eQzCCLe13mpGVLDrv79shU4cDlq7NdJZmZg7NHDi6jE" alt="Profile" className="img-fluid rounded-circle mb-3" />
                        <h4>Don Henessy S. David</h4>
                        <p>Web Developer & Blogger</p>
                        <hr />
                        <div className="contact-info">
                            <p><i className="fa fa-envelope"></i> don@gmail.com</p>
                            <p><i className="fa fa-phone"></i> (+63) 0991 1131 1313</p>
                        </div>
                        <hr />
                        <p className="bio">
                            Passionate about technology, programming, and sharing knowledge through my blog.
                        </p>
                    </div>
                </div>
                <div className="col-lg-8">
                        <h2>My Blog Posts</h2>
                    <div className="blog-post mb-4">
                        <h3>Understanding React Components</h3>
                        <p className="text-muted">Posted on October 30, 2024</p>
                        <p>React components are the building blocks of any React application...</p>
                        <a href="#" className="btn btn-contact-bg">Read More</a>
                    </div>
                    <div className="blog-post mb-4">
                        <h3>Tips for Becoming a Better Programmer</h3>
                        <p className="text-muted">Posted on October 15, 2024</p>
                        <p>Programming is a skill that requires continuous learning and practice...</p>
                        <a href="#" className="btn btn-contact-bg">Read More</a>
                    </div>
                    <div className="blog-post mb-4">
                        <h3>Introduction to Bootstrap for Web Development</h3>
                        <p className="text-muted">Posted on October 5, 2024</p>
                        <p>Bootstrap is a powerful toolkit for developing responsive websites quickly...</p>
                        <a href="#" className="btn btn-contact-bg">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyProfile;
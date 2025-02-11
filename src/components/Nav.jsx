import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid"> {/* Use container-fluid for full width */}
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link" activeClassName="active" aria-current="page">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active" aria-current="page">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/mymainforms" className="nav-link" activeClassName="active" aria-current="page">My Main Form</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

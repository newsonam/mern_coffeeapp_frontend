import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
function Footer(props) {
    return (
       
              <footer className="bg-dark text-white p-2 m-0 ">
        <div className="d-flex justify-content-center gap-4">
            <a className="link" href="https://www.instagram.com/" target="_blank"> <i className="fa-brands fa-instagram icon-link"></i></a>
            <a className="link" href="https://www.facebook.com/" target="_blank"> <i className="fa-brands fa-facebook-f icon-link"></i></a>
            <a className="link" href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube icon-link"></i></a>
            <a className="link" href="https://twitter.com/i/flow/login" target="_blank"><i className="fa-brands fa-twitter icon-link"></i></a>
        </div>
        <hr/>
    <div className="container d-flex align-items-center justify-content-between">
        <div className=" d-flex flex-column">
            <h5>Quick Links</h5>
            <Link to="/menu" className="text-decoration-none">Cafe Menu</Link>
            <Link to="/locator" className="text-decoration-none">Cafe Finder</Link>
            <Link to="/contact" className="text-decoration-none">Customer Care</Link>
        </div>

        <div className="  d-flex flex-column">
            <h5>Cafe Menu</h5>
            <Link to="/foodmenu" className="text-decoration-none">Food for Mood</Link>
            <Link to="/coffeemenu" className="text-decoration-none">Hot classic</Link>
            <Link to="/menu" className="text-decoration-none">All Day Delights</Link>
        </div>

        <div className="  d-flex flex-column">
            <h5>About Us</h5>
            <Link to="/awards" className="text-decoration-none">Awards</Link>
            <Link to="/about" className="text-decoration-none">About</Link>
            <Link to="/news" className="text-decoration-none">News & Events</Link>
        </div>
    </div>
    <hr/>
    <h6 className="container text-center">©Coffee Junction. All rights reserved.</h6>
</footer>
     
    );
}

export default Footer;
import React from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <div className="footer-contact">
                    <h2>Contact Us</h2>
                   <div> <i className='fas fa-phone-alt'></i></div>
                    <div><i className='fas fa-map-marker-alt'></i></div>
                    <div><i className='fas fa-envelope'></i></div>
                </div>
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin posuere lectus vitae neque accumsan, sit amet
                        condimentum risus ultrices. 
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                 <u><p>© Copyright 2020  All rights reserved.</p></u>
                
            </div>
        </div>
    );
};
export default Footer;

import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container container">
                <h1 className="footer__title">Akshay</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonial" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://twitter.com/AkshayP79364683" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-twitter-alt"></i>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100007627875101" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://dribbble.com/akkipanwarjaat" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-dribbble"></i>
                    </a>

                    <a href="https://github.com/panwarakshay08" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
            <span className="footer__copy"> @akshay-panwar-18. All rights reserved</span>
        </div>
    )
}

export default Footer;
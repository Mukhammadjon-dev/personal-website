import React from "react";
import "./footer.css";

const Footer=()=>{
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Muhammad Nazarov - Frontend Developer</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>
^12q34843
                <div className="footer__social">

                <a href="https://www.linkedin.com/in/mukhammadjon-nazarov/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/Mukhammadjon-dev" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.facebook.com/muhammadjon.nazarov.90" className="footer__social-link footer__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-facebook-f"></i>
            </a>

            <a href="https://twitter.com/n_mukhammadjon" className="footer__social-link footer__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-twitter"></i>
            </a>

            <a href="https://t.me/Mukhammadjon_nazarov" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-telegram-alt"></i>
            </a>

                </div>

                <span className="footer__copy"> All rights reserved</span>
            </div>
        </footer>
    )
}
export default Footer;
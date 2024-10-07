import { cibGithub, cibLeetcode, cibLinkedinIn } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import React from "react";

const Social = ()=>{
    return(
        <div className="home__social">
            <a href="https://t.me/Mukhammadjon_nazarov" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-telegram-alt"></i>
            </a>

            <a href="https://www.linkedin.com/in/mukhammadjon-nazarov/" className="home__social-icon" target="_blank" rel="noreferrer">
            <CIcon icon={cibLinkedinIn}/>
            </a>

            <a href="https://github.com/Mukhammadjon-dev" className="home__social-icon" target="_blank" rel="noreferrer">
                <CIcon icon={cibGithub}/>
            </a>

            <a href="https://leetcode.com/u/Mukhammadjon-dev/" className="home__social-icon" target="_blank" rel="noreferrer">
                <CIcon icon={cibLeetcode}/>
            </a>

        </div>
    )
}
export default Social;
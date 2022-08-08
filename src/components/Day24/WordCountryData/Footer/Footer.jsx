import React from 'react';
import './Footer.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };
    return (
        <div className='country-footer'>
            <i onClick={scrollToTop} className="fa-solid fa-circle-arrow-up scoll-top__btn"></i>

            <div className='country-footer-wrapper'>
                <p>
                    Copyright ©2020 30 Days Of React
                </p>
                <p>
                    Join
                    <a href="https://github.com/Asabeneh/30-Days-Of-React">30 Days of React challenge</a>
                </p>
                <small>
                    Designed and Built by
                    <a href='https://www.linkedin.com/in/asabeneh/'> Asabeneh Yetayeh</a>
                </small>
            </div>
        </div>
    )
}

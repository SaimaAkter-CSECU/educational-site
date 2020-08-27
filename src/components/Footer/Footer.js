import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBookReader, faLaptop } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const footerStyle ={
        height: '45px'
    }
    const footerTextStyle ={
        margin: '0px',
        padding: '10px'
    }
    return (
        <div className="container-fluid bg-dark" style={footerStyle}>
            <p className="text-center text-light" style={footerTextStyle}>
                This site is developed By 
                <FontAwesomeIcon icon={faLaptop} style={{marginLeft: '10px',marginRight: '10px'}}/>
                Saima
            </p>
        </div>
    );
};

export default Footer;
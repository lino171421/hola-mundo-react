import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';

const Footer = () => {
    return(
        <div className="div_footer">
            <h1>Razas de perros<Badge bg="primary">mas razas y datos aqui!</Badge></h1>
        </div>        
    )
}

export default Footer;
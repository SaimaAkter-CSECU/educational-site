import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {name, price} = props.cart; 
    return (
        
            
            <tr className="dropdown-item">
                <td><FontAwesomeIcon icon={faCheckCircle} /></td>
                <td className="col-md-9 text-truncate" style={{maxWidth: '210px'}}>{name}</td>
                <td className="col-md-3">: ${price}</td>
            </tr>
        
    );
};

export default Cart;
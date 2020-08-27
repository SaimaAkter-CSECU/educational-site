import React from 'react';
import logo from '../../logo.svg'; 
import Cart from '../Cart/Cart';
import './Navbar.css'; 

const Navbar = (props) => {
    const courses = props.courses; 

    let total =0;
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        total += Number(course.price); 
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="150" height="48" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Link Disabled</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Selected Courses (<span className="">{props.courses.length})</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <table>
                                    {
                                        props.courses.map(cart => <Cart cart={cart}></Cart>)
                                    }
                                    <div className="dropdown-divider"></div>
                                    <tr className="dropdown-item">
                                        <td className="col-md-9">Total</td>
                                        <td className="col-md-3">: ${total.toFixed(2)}</td>
                                    </tr>
                                    {/* <a className="dropdown-item" ><b>Total : $ {total.toFixed(2)}</b></a> */}
                                </table>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
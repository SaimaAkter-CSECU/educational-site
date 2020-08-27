import React from 'react';
import './Course.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    console.log(props); 
    const {name, description, price, img} = props.course; 
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card mb-4">
                <img src={img} className="img-fluid card-img-top" alt="Course Image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text">Price: ${price}</h6>
                    <button 
                        className="btn btn-warning" 
                        onClick={() => props.handleAddCourse(props.course)}
                    >
                        <FontAwesomeIcon icon={faBookReader} style={{marginRight: '10px'}}/>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;
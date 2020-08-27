import React from 'react';
import Course from '../Course/Course';

const Courses = (props) => {
    const coursesInfo = props.coursesList; 

    const coursesListStyle= {
        marginTop: '100px'
    }
    return (
        <div className="container">
            <div className="row course-list" style={coursesListStyle}>
                {
                    coursesInfo.map( course => <Course course={course} handleAddCourse={props.handleAddCourse}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;
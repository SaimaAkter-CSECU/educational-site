import React, {useState} from 'react';
import './App.css';
import courseFakeData from './fakeData/courseFakeData';
import Navbar from './components/Navbar/Navbar';
import Course from './components/Course/Course';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';


function App() {
  const coursesList = courseFakeData.slice(0,12); 
  const [coursesInfo, setCoursesInfo] = useState(coursesList); 

  const [courses, setCourses] = useState([]); 
  
  function handleAddCourse(props){
    const newCourseList = [...courses,props];
    setCourses(newCourseList);
    console.log("course: ",props); 
  }

  return (
    <div className="App">
      <Navbar courses={courses}></Navbar>
      <Courses coursesList={coursesInfo} handleAddCourse={handleAddCourse}></Courses>
      <Footer></Footer>
    </div>
  );
}

export default App;

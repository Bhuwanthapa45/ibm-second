import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Home from '../pages/home';
import Course from '../pages/course';
import ResourcesLibrary from '../pages/resourcesLibrary';
import Studymanagement from '../pages/studyManagement';
import Collabration from '../pages/collabration';
import Scholarship from '../pages/scholarships';



function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/resources" element={<ResourcesLibrary/>} />
        <Route path="/lms" element={< Studymanagement />} />
        <Route path="/collabration" element={<Collabration />} />
      
      </Routes>
    </Router>
  );
}

export default AppRoutes;

import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Courses from "./component/Courses";
import Contact from "./component/Contact";
import About from "./component/About";
import StudentList from "./component/StudentList";
import FindMobile from "./component/FindMobile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobile" element={<FindMobile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/// 1st task=>  Read data basis on our API
// 2nd task=> Create a data basis on our main data
//3rd task=> Update a data existing data
//4th task => delete a data

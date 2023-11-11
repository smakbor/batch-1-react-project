import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/courses" class="navbar-brand" href="#">
          SM
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/courses" class="nav-link" href="#">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/student-list" class="nav-link" href="#">
                Student List
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link" href="#">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

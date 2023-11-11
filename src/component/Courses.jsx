import React from "react";
import react from "../img/react.png";
import node from "../img/node.jpeg";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="d-flex mt-3" height="700px" width="500px">
      <div className="card me-3 " style={{ width: " 18rem" }}>
        <img
          src={react}
          height="200px"
          width="200px"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/about" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: " 18rem" }}>
        <img
          src={node}
          height="200px"
          width="200px"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Courses;

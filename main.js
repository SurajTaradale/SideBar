import React from "react";
// import { Link } from 'react-router-dom'
// import { Button } from '../../resuable/button'
import "../src/main.css";
function Index() {
  return (
    <>
      <div class="sidebar">
        <button>
          View Documents <i class="fa fa-angle-double-right arrowIcon"></i>
        </button>
        <button>
          Mark Attendence <i class="fa fa-angle-double-right arrowIcon"></i>
        </button>
        <button>
          View Timesheet <i class="fa fa-angle-double-right arrowIcon"></i>
        </button>
      </div>
      <div className="container">
        <div className="center-container">
          <h1 className="card-title">Employee Details</h1>
          <i class="fas fa-user-tie"></i>
          <div className="info-container">
            <div className="info-title">
              <h2>Employee Id: </h2>
              <h2>Employee Name: </h2>
              <h2>Email: </h2>
              <h2>Designation: </h2>
            </div>
            <div className="info-values">
              <h2> &nbsp;&nbsp; 001</h2>
              <h2> &nbsp;&nbsp; Ritik Raj</h2>
              <h2> &nbsp;&nbsp; ritiksinha91@gmail.com</h2>
              <h2> &nbsp;&nbsp; Full Stack Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;

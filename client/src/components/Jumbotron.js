import React from 'react';
import { Jumbotron } from 'reactstrap';
import Background from "../assets/office.jpeg";

export default function Jumbotronn() {
    return (
      <div>
        {" "}
        <Jumbotron style={style}>
          <h1 className="display-2 font-weight-normal" style={heading}>
            Robert's Jobs
          </h1>
          <p style={pg}>
            Welcome to Robert's Jobs. Finding jobs and hiring employes made easy for
            you!
          </p>
        </Jumbotron>
      </div>
    );
  }
  
  const style = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "600px"
  };
  
  const heading = {
    color: "#037d50",
    shadow: "1px"
  };
  
  const pg = {
    color: "#037d50",
    fontSize: "2em"
  };
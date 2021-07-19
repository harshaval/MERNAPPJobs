import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function Banner() {
  return (
    <div className="banner sticky-top">
      <Card>
        <CardBody>
          <CardTitle>Robert's Jobs</CardTitle>
          <CardText>
            Search for <a href="/Main">Jobs</a> job all over. If you are a
            employer, post a job <a href="/addJobs">here</a>
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
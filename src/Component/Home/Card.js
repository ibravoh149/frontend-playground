import React from "react";
import { Link } from "react-router-dom";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 76;
const pic =
  "https://s3.us-east-2.amazonaws.com/selamvp/project-avatars/b72758f2-8bb6-4dbc-839a-f15652a11675_WhatsAppImage2019-04-09at2.20.40PM.jpeg";
// ml-2
const goto = () => {
  window.location.href = "/project";
};

const Card = () => (
  <div className="project-card" onClick={goto}>
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <div className="">
          <Link to={`/project`}>
            <img
              className="projects-card-image img-fluid"
              src={pic}
              alt="card"
            />
          </Link>
        </div>
      </div>

      <div className="col-sm-12 col-md-8">
        <div className="" style={{ marginBottom: "10px" }}>
          <span className="location-title">Bodo I, Nigeria</span>
          <h6 className="card-project-title">Project title</h6>
        </div>
        <div className="">
          <p className="desc-text">
            {
              "The ability to document the degradation of Total Petroleum Hydrocarbon (TPH) using the biotechnology ..."
            }{" "}
            <span className="more">more</span>
          </p>
        </div>

        <div className="circular-progress rounded-circle">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: "24px",
              textColor: "#9A9A9A",
              pathColor: "#A0D6AC"
              // trailColor: "gold"
            })}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Card;

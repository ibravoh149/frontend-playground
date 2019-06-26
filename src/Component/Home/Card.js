import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
const pic =
  "https://s3.us-east-2.amazonaws.com/selamvp/project-avatars/b72758f2-8bb6-4dbc-839a-f15652a11675_WhatsAppImage2019-04-09at2.20.40PM.jpeg";
// ml-2
const Card = () => (
  <div className="project-card">
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <div className="">
          <img className="project-card-image img-fluid" src={pic} alt="card" />
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
            style={{ minWidth: "0.3vh", height: "0.2vh" }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Card;

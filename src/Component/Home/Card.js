import React from "react";

import pic from "../../assets/project.png";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
// ml-2
const Card = () => (
  <div className="col-md-6 mt-1 row   col-sm-12">
    <div
      className="row card mt-2 mb-2 col-md-12 col-12  col-sm-12"
      style={{
        height: "15em"
      }}
    >
    {/* col-sm-12  mt-4 */}
      <div className="col-md-3   h-75 ">
        <img
          className="h-100 col-12"
          src={pic}
          alt="Card"
          // style={{ height: "10em" }}
        />
      </div>
      <div className="mt-4 ml-1 col-md-9  col-12 col-sm-12">
        <div className="">
          <h5 className="card-title">Bodo 1</h5>
        </div>
        <div className="">
          <p
            className=""
            style={{
              fontWeight: "500",
              fontSize: "15px",
              color: "black"
            }}
          >
            Bon Ngia K.Dere Pond Cleanup
          </p>
        </div>

        <div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className="col-md-2 col-sm-4"
          // style={{
          //   height: "0.3px"
          // }}
        >
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            style={{ minWidth: "0.3vh", height: "0.2vh" }}
          />
          ;
        </div>
      </div>
    </div>
  </div>
);

export default Card;

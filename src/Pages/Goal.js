import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../Component/Header";

import Box from "../Component/Goal/Box";

const goto = () => {
  window.location.href = "/new-project";
};
function Goal() {
  return (
    <div className="App">
      <Header />
      <div
        className="col-sm-12 "
        // className="d-flex col-sm-12 justify-content-center align-items-center"
        style={{ padding: "34px" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div
            style={{
              width: "50%"
            }}
          >
            <div>
              <h5> Goal</h5>
            </div>

            <div className="d-flex flex-row no-gutters col-sm-12">
              <div className="col-md-8 no-gutters col-sm-12">
                <p>
                  {" "}
                  Goals are quantifiable results for your project. You can start
                  with the default examples below or create your own.
                </p>
              </div>
              <Link
                to={`#`}
                className="col-md-4 col-sm-12 d-flex justify-content-end"
              >
                <button
                  className="btn btn-success my-2 my-sm-0"
                  type="submit"
                  style={{
                    width: "150px",
                    height: "52px"
                  }}
                >
                  New Goal
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Box />
          <Box />

          <Box />
          <Box />
        </div>

        {/* 
        <div className="col-sm-12">
          <Box />
        </div>

        <div className="col-sm-12">
          <Box />
        </div> */}
      </div>
    </div>
  );
}

export default Goal;

import React, { Component } from "react";
import Bar from "react-meter-bar";
import { Link } from "react-router-dom";
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import map from '../assets/map.png'

const mapStyles = {
  width: '100%',
  height: '100%',
};

export const Overview = ({ data }) => {
  const { imageUrl, description, title } = data;
  return (
    <div className="row">
      <div className="col-12 col-md-4 align-items-center">
        <div className="image-box">
          <img className="image-box img-fluid" src={imageUrl} alt="project" />
           <img className="map-box" src={map} alt="map"/>
          <br />
          <span className="image-title">{title}</span>
        </div>
        <div className="project-description">
          <p className="desc-text">
            {description}
            <span className="more">more</span>
          </p>
        </div>
        <div className="row project-owner">
          {/* <div className="row"> */}
          <div className="col-sm-5">
            <span className="tab-text-style">Initaited by</span>
            <h6 className="">World bank Inc.</h6>
          </div>
          <div className="col-sm-5">
            <span className="tab-text-style">Total budget</span>
            <h6 className="">$100,000.00.</h6>
          </div>
          <div className="col-sm-2" />
          {/* </div> */}
        </div>

        <div className="project-progress">
          <span className="progress-title">Timeline</span>
          <div className="progress progress-timeline">
            <div
              className="progress-bar progress-bar-color"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <span className="tab-text-style">April 13, 2019</span>
            </div>
            <div className="col-sm-3 col-lg-3" />
            <div className="col-sm-3 col-lg-3" />

            <div className="col-sm-3 col-lg-3">
              <span className="tab-text-style">June 29, 2019</span>
            </div>
          </div>
        </div>

        <div className="stakeholders">
          <span className="tab-text-style">Stakeholders</span>

          <table class="table table-borderless">
            {/* <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead> */}
            <tbody>
              <tr>
                <td style={{ width: "5em" }}>
                  <img
                    className="stakeholder-image"
                    src={imageUrl}
                    alt="stakeholder"
                  />
                </td>
                <td className="align-middle stakeholder-text">
                  Collins Peters <br />
                  <span className="tab-text-style">Contractor</span>
                </td>
                <td className="align-middle stakeholder-action">
                  <span style={{ color: "#6EBD7F" }}>Accepted</span>
                </td>
              </tr>
              <tr>
                <td style={{ width: "5em" }}>
                  <img
                    className="stakeholder-image"
                    src={imageUrl}
                    alt="stakeholder"
                  />
                </td>
                <td className="align-middle stakeholder-text">
                  John Snow <br />
                  <span className="tab-text-style">Contractor</span>
                </td>
                <td className="align-middle stakeholder-action">
                  <span style={{ color: "#6EBD7F" }}>Accepted</span>
                </td>
              </tr>
              <tr>
                <td style={{ width: "5em" }}>
                  <img
                    className="stakeholder-image"
                    src={imageUrl}
                    alt="stakeholder"
                  />
                </td>
                <td className="align-middle stakeholder-text">
                  Sanwo-Olu Eko <br />
                  <span className="tab-text-style">Evalutor</span>
                </td>
                <td className="align-middle stakeholder-action">
                  <span style={{ color: "#FFB800" }}>Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div class="d-flex bd-highlight goals">
          <div class="flex-grow-1 bd-highlight goals-heading">Goals</div>
          <div class="bd-highlight" />
          <Link to="/goal" class="bd-highlight new-goal-button">
            New Goal
          </Link>
        </div>

        {/* goal car 1 */}
        <div className="goal-card">
          <h5 className="goal-title">
            Deliver a sustainable source of clean water to 100 people
          </h5>
          <br />
          <div className="metric-progress">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <h6 className="metric-title">Reduce ph of water to 70ph</h6>
              </div>
              <div className="col-sm-3 col-lg-3" />
              <div className="col-sm-3 col-lg-3" />

              <div className="col-sm-3 col-lg-3">
                <span className="tab-text-style">17% complete</span>
              </div>
            </div>
            <div className="progress progress-metric">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>

          <div className="metric-progress">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <h6 className="metric-title">
                  Reduce Petroleum content of water by 95%
                </h6>
              </div>
              <div className="col-sm-3 col-lg-3" />
              <div className="col-sm-3 col-lg-3" />

              <div className="col-sm-3 col-lg-3">
                <span className="tab-text-style">17% complete</span>
              </div>
            </div>
            <div className="progress progress-metric">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>

          <div className="metric-progress">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <h6 className="metric-title">Reduce cryptosporidium 0 ml/L</h6>
              </div>
              <div className="col-sm-3 col-lg-3" />
              <div className="col-sm-3 col-lg-3" />

              <div className="col-sm-3 col-lg-3">
                <span className="tab-text-style">17% complete</span>
              </div>
            </div>
            <div className="progress progress-metric">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
        {/* goal card 1 */}

        {/* goal card 2 */}
        <div className="goal-card">
          <h5 className="goal-title">
            Deliver a sustainable source of clean water to 100 people
          </h5>
          <br />
          <div className="metric-progress">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <h6 className="metric-title">Reduce ph of water to 70ph</h6>
              </div>
              <div className="col-sm-3 col-lg-3" />
              <div className="col-sm-3 col-lg-3" />

              <div className="col-sm-3 col-lg-3">
                <span className="tab-text-style">0% complete</span>
              </div>
            </div>
            <div className="progress progress-metric">
              <div
                className="progress-bar progress-bar-color"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>

          <div className="metric-progress">
            <div className="row">
              <div className="col-sm-3 col-lg-5">
                <h6 className="metric-title">
                  Reduce Petroleum content of water by 95%
                </h6>
              </div>
              <div className="col-sm-3 col-lg-2" />
              <div className="col-sm-3 col-lg-2" />

              <div className="col-sm-3 col-lg-3">
                <span className="tab-text-style">0% complete</span>
              </div>
            </div>
            <div className="progress progress-metric">
              <div
                className="progress-bar progress-bar-color"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
        {/* goal card 2 */}

        {/* goal card3  */}
        <div className="goal-card">
          <h5 className="goal-title">
            Deliver a sustainable source of clean water to 100 people
          </h5>
          <br />
          <div className="metric-progress">
            <div className="row">
              <div className="col-sm-3 col-lg-5">
                <h6 className="metric-title">Reduce ph of water to 70ph</h6>
              </div>
              <div className="col-sm-3 col-lg-2" />
              <div className="col-sm-3 col-lg-2" />

              <div className="col-sm-3 col-lg-3">
                <span className="tab-text-style">0% complete</span>
              </div>
            </div>
            <div className="progress progress-metric">
              <div
                className="progress-bar progress-bar-color"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>

          <div className="metric-progress">
            <div className="row">
              <div className="col-sm-3 col-lg-5">
                <h6 className="metric-title">
                  Reduce Petroleum content of water by 95%
                </h6>
              </div>
              <div className="col-sm-3 col-lg-2" />
              <div className="col-sm-3 col-lg-2" />

              <div className="col-sm-3 col-lg-3">
                <span className="tab-text-style">0% complete</span>
              </div>
            </div>
            <div className="progress progress-metric">
              <div
                className="progress-bar progress-bar-color"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
        {/* goal card 3 */}
      </div>
    </div>
  );
};

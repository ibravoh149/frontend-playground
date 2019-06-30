import React from "react";

import pic from "../../assets/project.png";
import edit from "../../assets/edit.png";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
// ml-2
const Box = () => (
  <div
    className="col-md-6 mt-3 row card  col-sm-12 project-card"
    style={{
      // width: "50%",
      paddingTop: "15px",
      paddingBottom: "15px"
    }}
  >
    <div
      className="modal fade col-md-12 "
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog col-md-12 " role="document">
        <div class="modal-content col-md-12">
          <div class="modal-body">
            <div className="form-group">
              <label for="exampleInputEmail1">Metric</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="col-md-12 d-flex flex-row">
            <div className="col-md-6">
              <label for="exampleFormControlTextarea1">Baseline</label>
              <div className="flex-row d-flex">
                <input
                  type="email"
                  class="form-control col-md-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Pond Cleanup</option>
                  <option>Pond Cleanup</option>
                  <option>Pond Cleanup</option>
                  <option>Pond Cleanup</option>
                  <option>Pond Cleanup</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <label for="exampleFormControlTextarea1">Baseline</label>
              <div className="flex-row d-flex">
                <input
                  type="email"
                  class="form-control col-md-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Pond Cleanup</option>
                  <option>Pond Cleanup</option>
                  <option>Pond Cleanup</option>
                  <option>Pond Cleanup</option>
                  <option>Pond Cleanup</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-12 no-gutters mt-2 mb-2">
            <span className="col-md-8">
              <button
                type="button"
                className="btn btn-light col-md-6 no-gutters col-sm-12"
              >
                Cancel
              </button>

              <button
                type="button"
                className="btn btn-success col-md-6 no-gutters col-sm-12"
              >
                Next
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-12">
      <div>
        <h5> Goal </h5>
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          style={{
            backgroundColor: "#F2F4F9"
          }}
        />
      </div>
    </div>
    <div className="col-md-12">
      <div className="d-flex">
        <div className="flex2">
          <p>Metric </p>
        </div>
        <div className="flex1">
          <p>Baseline</p>
        </div>
        <div className="flex1">
          <p>Target</p>
        </div>
      </div>
      <table className="table table-bordered table-striped ">
        <thead>
          <tr>
            <th scope="col col-sm-3">Metric</th>
            <th scope="col col-sm-3">Baseline</th>
            <th scope="col col-sm-3">Target</th>
          </tr>
        </thead>
        <tbody>
          <tr className="col-md-6 col-sm-8">
            {/* <th scope="row">1</th> */}
            <td className="goal-table-text">Mark</td>
            <td className="goal-table-text">Otto</td>
            <td className="goal-table-text">@mdo</td>
            <td className="goal-table-text">
              <img
                src={edit}
                alt="edit"
                data-toggle="modal"
                data-target="#exampleModal"
              />
            </td>
          </tr>
          <tr className="col-md-4">
            {/* <th scope="row">2</th> */}
            <td className="goal-table-text">Jacob</td>
            <td className="goal-table-text">Thornton</td>
            <td className="goal-table-text">@fat</td>
            <td className="goal-table-text">
              <img
                src={edit}
                alt="edit"
                data-toggle="modal"
                data-target="#exampleModal"
              />
            </td>
          </tr>
          <tr className="col-md-2">
            {/* <th scope="row">3</th> */}
            <td className="goal-table-text">Larry the Bird</td>
            <td className="goal-table-text">@twitter</td>
            <td className="goal-table-text">@fat</td>
            <td className="goal-table-text">
              <img
                src={edit}
                alt="edit"
                data-toggle="modal"
                data-target="#exampleModal"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="row col-md-12">
      <div className="col-md-6 col-sm-12">
        <p
          style={{
            color: "#6EBD7F"
          }}
        >
          {" "}
          Add metric
        </p>
      </div>
      <div className="col-md-6 col-sm-12 d-flex justify-content-md-end">
        <p
          style={{
            color: "#FFB800"
          }}
        >
          {" "}
          Delete goal
        </p>
      </div>
    </div>
  </div>
);

export default Box;

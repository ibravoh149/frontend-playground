import React from "react";

export const NewProject = () => (
  <div className="d-flex justify-content-center align-items-center">
    <div
      className="col-md-6 mt-3 row card  col-sm-12 project-card"
      style={{
        // width: "50%",
        paddingTop: "15px",
        paddingBottom: "15px"
      }}
    >
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description(Optional)</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        />
      </div>

      <div className="form-group">
        <label for="exampleFormControlSelect1">project Type</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Pond Cleanup</option>
          <option>Pond Cleanup</option>
          <option>Pond Cleanup</option>
          <option>Pond Cleanup</option>
          <option>Pond Cleanup</option>
        </select>
      </div>
      <div className="col-md-12 no-gutters">
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
      </div>
    </div>
  </div>
);

export default NewProject;

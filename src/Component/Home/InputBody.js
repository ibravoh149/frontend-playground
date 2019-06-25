import React from "react";

const InputBody = () => (
  <div className="pt-4 no-gutters row">
    <div className="col-sm-7">
      <p
        style={{
          fontWeight: "500",
          fontSize: "16px",
          color: "#222222"
        }}
      >
        {" "}
        Projects{" "}
      </p>
    </div>
    <div className="col-sm-5 row">
      <div className="col-sm-8">
        <input
          className=""
          placeholder=" search ..."
          type=""
          class="form-control"
        />
      </div>
      <div className="col-sm-4">
        <button type="button" className="btn btn-success">
          New Project
        </button>
      </div>
    </div>
  </div>
);

export default InputBody;

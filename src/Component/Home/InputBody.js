import React from "react";

const InputBody = () => (
  <div className="pt-4 no-gutters row">
    <div className="col-md-7">
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
    <div className="col-md-5">
     <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
     </div>
  </div>
);

export default InputBody;

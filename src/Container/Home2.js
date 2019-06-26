import React, { Component } from "react";

import Header from "../Component/Home/Header";
import InputBody from "../Component/Home/InputBody";
import Card from "../Component/Home/Card";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid pt-3 ">
        <Header />
        <div className="">
          <div>
            <InputBody />
            <div className=" row mt-2 ">
            <div className="col-md-6 mb-2">
              <Card />
            </div>
              <div className="col-md-6 mb-2">
              <Card />
            </div>
              <div className="col-md-6 mb-2">
              <Card />
            </div>
              <div className="col-md-6 mb-2">
              <Card />
            </div>
       
              {/* <Card /> */}
            </div>
          </div>
      </div>
    </div>
    );
  }
}

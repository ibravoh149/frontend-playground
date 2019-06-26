import React, { Component } from "react";

import Header from "../Component/Home/Header";
import InputBody from "../Component/Home/InputBody";
import Card from "../Component/Home/Card";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid pt-3 ">
        <div className="">
          <div>
            <InputBody />
            {/* first */}
            <div className="row mt-2">
              <div className="col-md-6 mt-2">
                <Card />
              </div>

              <div className="col-md-6 mt-2">
                <Card />
              </div>
            </div>

            {/* first */}

            {/* second */}
            <div className="row mt-2">
              <div className="col-md-6 mt-2">
                <Card />
              </div>

              <div className="col-md-6 mt-2">
                <Card />
              </div>
            </div>
            {/* second */}

            {/* third */}
            <div className="row mt-2">
              <div className="col-md-6 mt-2">
                <Card />
              </div>

              <div className="col-md-6 mt-2">
                <Card />
              </div>
            </div>
            {/* third */}

            {/* four */}
            <div className="row mt-2">
              <div className="col-md-6 mt-2">
                <Card />
              </div>

              <div className="col-md-6 mt-2">
                <Card />
              </div>
            </div>
            {/* four */}
          </div>
        </div>
      </div>
    );
  }
}

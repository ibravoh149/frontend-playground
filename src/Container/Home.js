import React, { Component } from "react";

import Header from "../Component/Home/Header";
import InputBody from "../Component/Home/InputBody";
import Card from "../Component/Home/Card";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid pt-3 ">
        <Header />
        <InputBody />
        <div className=" row mt-2">
          <Card />
          <Card />

          <Card />
          <Card />

          <Card />
          <Card />
          {/* <Card /> */}
        </div>
      </div>
    );
  }
}

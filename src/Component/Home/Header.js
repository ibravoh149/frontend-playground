import React from "react";

import SelaLogo from "../../assets/sela.png";
import Profile from "../../assets/profile.png";
const Header = () => (
  <div className="row">
    <div className="col-md-11">
      <img src={SelaLogo} alt="logo" />
    </div>
    <div className="col-md-1 d-flex align-items-end no-gutters justify-content-md-end align-content-md-end">
      <img className ="no-gutters align-items-end justify-content-md-end align-content-md-end" src={Profile} alt="profile" />
    </div>
  </div>
);

export default Header;

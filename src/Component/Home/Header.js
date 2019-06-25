import React from "react";

import SelaLogo from "../../assets/sela.png";
import Profile from "../../assets/profile.png";
const Header = () => (
  <div className="row">
    <div className="col-sm-11 col-11">
      <img src={SelaLogo} alt="logo" />
    </div>
    <div className="col-sm-1 col-1">
      <img src={Profile} alt="profile" />
    </div>
  </div>
);

export default Header;

import React from 'react';

import SelaLogo from "../assets/sela.png";
import Profile from "../assets/profile.png";


export const Header = (props) => {

    return (
        <div style={{ zIndex: 9999 }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={SelaLogo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li> */}

                    </ul>
                    <div className="col-md-1 d-flex align-items-end no-gutters justify-content-md-end align-content-md-end">
                        <img className="no-gutters align-items-end justify-content-md-end align-content-md-end" src={Profile} alt="profile" />
                    </div>
                </div>
            </nav>
        </div>
    )
}
import React, { Component } from 'react';

import { Overview } from '../Component/Overview'



class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Bodo I, Nigeria",
            description: "The ability to document the degradation of Total Petroleum Hydrocarbon (TPH) using the biotechnology ...",
            imageUrl: "https://s3.us-east-2.amazonaws.com/selamvp/project-avatars/b72758f2-8bb6-4dbc-839a-f15652a11675_WhatsAppImage2019-04-09at2.20.40PM.jpeg"
        }
    }

    render() {
        return (
            <div className="box">

                <div className="container-fluid left-column">
                    <div className="row">
                        <div className="col-sm float-lg-left">
                            Title goes here
                        </div>
                        <div className="col-sm">
                        </div>
                        <div className="col-sm">
                        </div>
                        <div className="col-sm">
                        </div>
                        <div className="col-sm float-lg-right">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Overview
                            data={this.state}
                        />
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">two </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">three</div>
                </div>

            </div>
        )
    }
}

export default Project
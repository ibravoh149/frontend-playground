import React, { Component } from 'react';



// class Overview extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <div className="">

//             </div>
//         )
//     }
// }

// export default Overview

export const Overview = ({ data }) => {
    const { imageUrl, description, title } = data
    return (
        <div className="row">
            <div className="col-12 col-md-4 align-items-center">
                <div className="">
                    <img className="image-box img-fluid" src={imageUrl} alt="project" />
                    <br />
                    <span className="image-title">{title}</span>
                </div>
                <div className="project-description">
                    <p className="desc-text">{description}<span className="more">more</span></p>
                </div>
            </div>
            <div className="col-12 col-md-8">
                this is two
            </div>
        </div>
    )
}
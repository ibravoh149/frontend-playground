import React from 'react';


export const Tasks = ({ data }) => {
    const {imageUrl}=data
    return (
        <div className="container-fluid">
            <div class="d-flex bd-highlight goals">
                <div class="p-2 flex-grow-1 bd-highlight goals-heading" ></div>
                <div class="p-2 bd-highlight new-goal-button"></div>
                <div class="p-2 bd-highlight new-goal-button">
                    <form className="form-inline my-2 my-lg-0 has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input className="form-control mr-sm-2 input-bg" type="search" placeholder="" aria-label="Search" />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>
            </div>

            <table class="table table-bordered" id="#task-table">
                {/* <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <td className="table-check-box align-middle" style={{width:"1em"}}>
                            <div className="custom-control custom-checkbox boxchecker">
                                <input type="checkbox" className="custom-control-input" style={{ margin:"auto",display:"block"}} id="customCheck1" />
                                <label className="custom-control-label" for="customCheck1"></label>
                            </div>
                        </td>
                        <td className="task-name align-middle" style={{width:"50em"}}>Mark this is a very long text that may want tp overflow its space in time</td>
                        <td className="align-middle" style={{ width: "5em" }}><img className="tasks-stakeholder-image rounded-circle" src={imageUrl} alt="stakeholder" /></td>
                        <td className="align-middle" style={{ width: "10em" }}>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
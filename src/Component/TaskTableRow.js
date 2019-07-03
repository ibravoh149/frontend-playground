import React, { useState } from 'react';

// const [checked]= useState(false)

export const Row = ({ imageUrl, rowId }) => {
    return (
        <tr>
            <td className="table-check-box align-middle" style={{ width: "1em" }}>
                <div className="custom-control custom-checkbox boxchecker">
                    <input type="checkbox" className="custom-control-input" style={{ margin: "auto", display: "block" }} id={rowId} />
                    <label className="custom-control-label" for={rowId}></label>
                </div>
            </td>
            <td className="task-name align-middle" style={{ width: "50em" }}>Mark this is a very long text that may want tp overflow its space in time</td>
            <td className="align-middle" style={{ width: "5em" }}><img className="tasks-stakeholder-image rounded-circle" src={imageUrl} alt="stakeholder" /></td>
            <td className="align-middle" style={{ width: "10em" }}><span className="task-status-text">IN PROGRESS</span></td>
        </tr>
    )
}
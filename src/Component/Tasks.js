import React from 'react';
import { Row } from '../Component/TaskTableRow';
import listButton from '../assets/listing-option.png';
import gridButton from '../assets/trello.png'


export const Tasks = ({ data }) => {
    const { imageUrl } = data
    return (
        <div className="tt">
            <div class="d-flex bd-highlight mb-1">
                <div class="mr-auto p-2 bd-highlight">
                    <button className="mr-2 btn default" type="submit"><img className="list-grid" src={listButton} alt="list" /></button>
                    <button className="btn default trello" type="submit"><img className="list-grid" src={gridButton} alt="grid" /></button>
                </div>

                <div class="p-2 bd-highlight">
                    <button className="btn default" type="submit">Filter/Sort</button>
                </div>

                <div class="p-2 bd-highlight">
                    <form className="form-inline has-search">
                        {/* <span class="fa fa-search form-control-feedback"></span> */}
                        <input className="form-control mr-sm-2 input-bg" type="search" placeholder="search..." aria-label="Search" />
                        <button className="btn button-color my-2 my-sm-0" type="submit">New Task</button>
                    </form></div>
            </div>

            {/* <div className="col-sm-12" style={{ marginLeft: '-33px', marginRight:'-33px', paddingRight:'-33px' }}> */}
            <div className="col-sm-12" style={{paddingLeft:'6px', paddingRight:'9px'}} >
                <table class="table table-bordered table-striped table-hover"  id="task-table">
                    {/* <thead>
                    <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                </thead> */}
                    <tbody>
                        <Row imageUrl={imageUrl} rowId={1} />
                        <Row imageUrl={imageUrl} rowId={2} />
                        <Row imageUrl={imageUrl} rowId={3} />
                        <Row imageUrl={imageUrl} rowId={4} />
                        <Row imageUrl={imageUrl} rowId={6} />
                        <Row imageUrl={imageUrl} rowId={5} />
                        <Row imageUrl={imageUrl} rowId={7} />
                        <Row imageUrl={imageUrl} rowId={8} />
                        <Row imageUrl={imageUrl} rowId={9} />
                        <Row imageUrl={imageUrl} rowId={10} />
                        <Row imageUrl={imageUrl} rowId={11} />
                        <Row imageUrl={imageUrl} rowId={12} />
                        <Row imageUrl={imageUrl} rowId={13} />
                        <Row imageUrl={imageUrl} rowId={14} />
                        <Row imageUrl={imageUrl} rowId={15} />
                        <Row imageUrl={imageUrl} rowId={16} />
                        <Row imageUrl={imageUrl} rowId={17} />
                        <Row imageUrl={imageUrl} rowId={18} />
                        <Row imageUrl={imageUrl} rowId={19} />
                        <Row imageUrl={imageUrl} rowId={20} />
                    </tbody>
                </table>
            </div>

        </div>
    )
}
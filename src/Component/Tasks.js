import React from 'react';
import { Row } from '../Component/TaskTableRow';
import listButton from '../assets/listing-option.png';
import gridButton from '../assets/trello.png'


export const Tasks = ({ data }) => {
    const { imageUrl } = data
    return (
        <div className="">
            {/* <div class="p-2 d-flex bd-highlight">
               
                
                <div class="mr-auto bd-highlight">
                    <button className="mr-2 btn btn-default my-2 my-sm-0" type="submit">list</button>
                    <button className="mt-2 btn btn-default my-2 my-sm-0" type="submit">grid</button>
                </div>

                <div class="bd-highlight new-goal-button">
                    <form className="form-inline my-2 my-lg-0 has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input className="form-control mr-sm-2 input-bg" type="search" placeholder="" aria-label="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">New Task</button>
                    </form>
                </div>
            </div> */}

            {/* <div className="row">
                <div className="col-md-4 p-2">
                    <button className="mr-2 btn filter-btn" type="submit"></button>
                    <button className="btn btn-success" type="submit">grid</button>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <button className="btn filter-btn" type="submit">Filter/Sort</button>
                        </div>
                        <div className="col-sm-12 col-md-8 p-right">
                            <form className="form-inline has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input className="form-control mr-sm-2 input-bg" type="search" placeholder="" aria-label="Search" />
                                <button className="btn btn-success my-2 my-sm-0" type="submit">New Task</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div> */}

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

            <div className="col-sm-12" style={{width:'100%'}}>
            <table class="table table-responsive" id="task-table">
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
                    <Row imageUrl={imageUrl} rowId={3}/>
                    <Row imageUrl={imageUrl} rowId={4}/>
                    <Row imageUrl={imageUrl} rowId={6}/>
                    <Row imageUrl={imageUrl} rowId={5}/>
                    <Row imageUrl={imageUrl} rowId={7}/>
                    <Row imageUrl={imageUrl} rowId={8}/>
                    <Row imageUrl={imageUrl} rowId={9}/>
                    <Row imageUrl={imageUrl} rowId={10}/>
                    <Row imageUrl={imageUrl} rowId={11}/>
                    <Row imageUrl={imageUrl} rowId={12}/>
                    <Row imageUrl={imageUrl} rowId={13}/>
                    <Row imageUrl={imageUrl} rowId={14}/>
                    <Row imageUrl={imageUrl} rowId={15}/>
                    <Row imageUrl={imageUrl} rowId={16}/>
                    <Row imageUrl={imageUrl} rowId={17}/>
                    <Row imageUrl={imageUrl} rowId={18}/>
                    <Row imageUrl={imageUrl} rowId={19}/>
                    <Row imageUrl={imageUrl} rowId={20}/>
                </tbody>
            </table>
            </div>

        </div>
    )
}
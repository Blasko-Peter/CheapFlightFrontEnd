import React from 'react';
import Row from "../components/Row";
import { MDBTable, MDBTableBody, MDBBtn } from 'mdbreact';
import "../styles/table.css";

function Table(props) {
    const flights = props.flights.map(flight => <Row key={flight.id} flight={flight} />)
    const way = props.startTown + " - " + props.arriveTown
    const travelTime = props.startTime
    return[
        <div id="table-container">
            <div id="new-search">
                <h2>{way}</h2>
            </div>
            <div id="new-search">
                <h2>{travelTime}</h2>
            </div>
            <MDBTable>
                <MDBTableBody>
                    {flights}
                </MDBTableBody>
            </MDBTable>
            <div id="new-search">
                <MDBBtn id="new-search-btn" color="warning" onClick={props.newSearch} >New Search</MDBBtn>
            </div>
        </div>
        
    ]
}

export default Table;
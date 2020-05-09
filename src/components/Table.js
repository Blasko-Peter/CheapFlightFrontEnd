import React from 'react';
import Row from "../components/Row";
import { MDBTable, MDBTableBody, MDBBtn } from 'mdbreact';
import "../styles/table.css";

function Table(props) {
    const flights = props.flights.map(flight => <Row key={flight.id} flight={flight} />)
    return[
        <div id="table-container">
            <MDBTable>
                <MDBTableBody>
                    {flights}
                </MDBTableBody>
            </MDBTable>
            <div id="new-search">
                <MDBBtn id="new-search-btn" color="warning">New Search</MDBBtn>
            </div>
        </div>
        
    ]
}

export default Table;
import React from 'react'

function Table(props) {
    const flights = "majom"
    return[
        <MDBTable>
            <MDBTableBody>
                {flights}
            </MDBTableBody>
        </MDBTable>
    ]
}

export default Table;
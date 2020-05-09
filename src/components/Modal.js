import React from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

function Modal(props) {
    return (
        <div>
            <MDBContainer>
                <MDBModal className="modal-bg-black" backdrop="static" isOpen={props.modal} toggle={props.toggle} centered>
                    <MDBModalHeader>Do you like to travel?</MDBModalHeader>
                    <MDBModalBody>
                        The start town and the arrive town is the same. If you wish to travel choose two different cities.
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="warning" onClick={props.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        </div>
    )
}

export default Modal;
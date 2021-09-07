import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>  {this.props.name} </Modal.Title>
                </Modal.Header>
               
                <Modal.Body> {this.props.mDisc}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AppPublishForm from './AppPublishForm';

const AppCreateWorkModal = (props) => {

    let {modalState,handleSubmitWork,hideCreateWorkModal} = props;

    return (
        <Modal
            show={modalState} onHide={hideCreateWorkModal} animation={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                    <p>Add a new work</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AppPublishForm handleSubmitWork={handleSubmitWork}/>
            </Modal.Body>
        </Modal>
    );
}

export default AppCreateWorkModal;
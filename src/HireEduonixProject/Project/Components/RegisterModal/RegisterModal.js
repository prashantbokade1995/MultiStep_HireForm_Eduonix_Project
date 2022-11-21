
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import LoginModalBox from '../LoginModal/LoginModalBox';





const RegisterModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="btn btn-warning" onClick={handleShow}>
                SignUp
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control
                                type="text" className='m-1'
                                placeholder="Enter your Name"
                                autoFocus
                            />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email" className='m-1'
                                placeholder="name@email.com"
                                autoFocus
                            />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password" className='m-1'
                                placeholder="Enter The Password"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3 m-2"
                            controlId="exampleForm.ControlTextarea1"
                        >
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <LoginModalBox/>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RegisterModal

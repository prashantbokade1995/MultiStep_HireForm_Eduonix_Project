import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import RegisterModal from '../RegisterModal/RegisterModal';


const LoginModalBox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="btn btn-warning m-2" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
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
                    <RegisterModal/>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LoginModalBox

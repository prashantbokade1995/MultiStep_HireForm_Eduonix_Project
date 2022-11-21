
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './HireReq.css'


const HireReq = ({activeStep, steps, handleNext}) => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label> <b>First name*</b> </Form.Label>
          <Form.Control required type="text" placeholder="Enter first name " />
            <Form.Control.Feedback>Nice Name</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please Enter Your FirstName</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label><b>Last name*</b></Form.Label>
          <Form.Control required type="text" placeholder="Enter Last name"/>
          <Form.Control.Feedback type="invalid">Please Enter Your LastName</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername" className="mb-3 mt-3">
          <Form.Label> <b>Designation*</b> </Form.Label>
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Eg. HR head" aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback>Nice You choose this path</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please Enter Your Designation.</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label> <b>Company*</b> </Form.Label>
          <Form.Control type="text" placeholder="Enter company name" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please enter Your Company Details.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04" className="mb-3 mt-3">
          <Form.Label> <b>Email*</b> </Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please provide us valid Email.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05" className="mb-3 mt-3">
          <Form.Label> <b>Work Phone Number*</b> </Form.Label>
          <Form.Control type="tel" placeholder=" Enter Phone Number " required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please provide us valid Phone Number.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className=" d-grid gap-2 mt-4">
      <button className="btn btn-warning" type="submit" 
      onClick ={handleSubmit}>Submit</button>
      </div>
      <div className=" d-grid gap-2 mt-4">
      <button className="btn btn-warning" type="submit" onClick = {handleNext}>{activeStep === steps.lenght ? "Submit" : "Next"}</button>
      </div>
      
      </Form>
    </>
  )
}

export default HireReq

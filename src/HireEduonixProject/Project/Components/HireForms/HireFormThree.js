import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './HireReq.css'
import { HiOutlineCloudUpload } from 'react-icons/hi';
import ReCAPTCHA from "react-google-recaptcha";

const HireFormThree = ({activeStep, steps, handleNext}) => {

  function onChange(value) {
    console.log("Captcha value:", value);
  }

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
    <div className='RegisterHead'>
    </div>
      <Row className="mb-2">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label> <b>Location*</b> </Form.Label>
          <Form.Control required type="text" placeholder="Enter your Location " />
            <Form.Control.Feedback>Look Good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please Enter Valide Details</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label><b>Timeline (in days)*</b></Form.Label>
          <Form.Control required type="text" placeholder="Enter Timeline"/>
          <Form.Control.Feedback type="invalid">Please Enter Timeline in days</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-1 m-2">
      <Form.Group as={Col} md="12" controlId="validationCustom01">
      <div className="file-upload-wrapper" id='dragdrop'>
      <input type="file" id="input-file-now" className="file-upload" />
      <h1><HiOutlineCloudUpload/></h1>
      </div>

      <div className="alert alert-dark m-2" role="alert">
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      <div className='m-2' id="progress">
      <p>jd_for_ softwaredeveloper.pdf</p>
      <div className="progress" style={{'height': '15px'}}>
      <div className="progress-bar" role="progressbar" style={{'width': '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
      </div>
      </div>
      </div>
      </div>
      <div className="alert alert-dark m-2" role="alert">
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      <div className='m-2' id="progress">
      <p>jd_for_ softwaredeveloper.pdf</p>
      <div className="progress" style={{'height': '15px'}}>
      <div className="progress-bar" role="progressbar" style={{'width': '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%
      </div>
      </div>
      </div>
      </div>
      <br /><br />
      <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
      </Form.Group>
      
      </Row>
      <div className=" d-grid gap-2 mt-4">
      <button className="btn btn-warning" type="submit" 
      onClick ={handleSubmit}>Submit</button>
      </div>
      <div className=" d-grid gap-2 mt-4">
      <button className="btn btn-warning" type="submit" onClick = {handleNext}>{activeStep === steps.lenght ? "Submit" : "Submit"}</button>
      </div>
      </Form>
    </>
  )
}

export default HireFormThree


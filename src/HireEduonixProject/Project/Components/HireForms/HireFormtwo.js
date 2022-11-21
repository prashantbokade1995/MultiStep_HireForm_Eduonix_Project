
import { useState } from 'react';
// import { FormSelect } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './HireReq.css'
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';


const HireFormtwo = ({activeStep, steps, handleNext}) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleAdd = () => {
    console.info('You clicked the delete icon.');
  };



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
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label> <b>Role You Are Hiring For*</b> </Form.Label>
          <Form.Control required type="text" placeholder="Enter the role " />
            <Form.Control.Feedback>Role You Are Hiring For</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please Enter Your Hiring Role  </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02" className="mb-2 mt-2">
          <Form.Label><b>Compensation (In LPA)*</b></Form.Label>
          <Form.Control required type="number" placeholder="From  -  To"/>
          <Form.Control.Feedback>Please Enter input value in Number</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please Enter Your Compensation (In LPA)</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustomUsername" className="mb-2 mt-2">
          <Form.Label> <b>Years of Experience*</b> </Form.Label>
          <InputGroup hasValidation>
          <Form.Select type="select" required defaultValue="Select Years of Experience">
          <option>Select Years of Experience</option>
          <option>0</option>
          <option>1-2</option>
          <option>2-3</option>
          <option>3-4</option>
          <option>4-5</option>
          <option>5-7</option>
          <option>8-10</option>
          <option>Upto 10+</option>
          </Form.Select>
            <Form.Control.Feedback>if your Fresher Write zero(0)</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please Enter Your Experience.</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-1">
        
        <Form.Group as={Col} md="6" controlId="validationCustom04" className="mb-3 mt-3">
          <Form.Label> <b>Onsite/Remote*</b> </Form.Label>
          <Form.Select type="select" required defaultValue="Select any">
          <option>Select any</option>
          <option>Work From Home</option>
          <option>Work From Office</option>
          <option>Hybrid</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please Select any</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom05" className="mb-3 mt-3">
          <Form.Label> <b>Number of positions*</b> </Form.Label>
          <Form.Control type="text" placeholder="Enter the num. of positions" aria-describedby="inputGroupPrepend" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please provide us valid Details.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Stack direction="row" spacing={1}>
      <Chip
        label="Full-time"
        onClick={handleClick}
        onDelete={handleAdd}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Part-time"
        onClick={handleClick}
        onDelete={handleAdd}
        deleteIcon={<AddIcon />}
        variant="outlined"
      />
      <Chip icon={<AddIcon />} label="Internship" variant="outlined" />
      <Chip icon={<AddIcon />} label="Freelancer" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={1} className='m-2'>
      <Chip icon={<AddIcon />} label="Developer" variant="outlined" />
      <Chip icon={<AddIcon />} label="UI/UX designer" variant="outlined" />
      <Chip icon={<AddIcon />} label="CSE" variant="outlined" />
    </Stack>
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

export default HireFormtwo

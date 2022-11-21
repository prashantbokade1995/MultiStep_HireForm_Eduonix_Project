import React, {useState}  from 'react'
import HireFormThree from './HireFormThree'
import HireFormtwo from './HireFormtwo'
import HireReq from './HireReq'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './ChangePage.css'
import Modal from 'react-bootstrap/Modal';
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';


const ChangePage = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prectiveStep => prectiveStep +1)
  }

  function getSteps () {
     return ["", "", ""];
  }

  const steps = getSteps ();

  
  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <HireReq 
        handleNext={handleNext}
        activeStep = {activeStep}
        steps ={steps}
        />;
      case 1:
        return <HireFormtwo
        handleNext={handleNext}
        activeStep = {activeStep}
        steps ={steps}/>;
      case 2:
        return <HireFormThree
        handleNext={handleNext}
        activeStep = {activeStep}
        steps ={steps}/>;
      default: return "unknown steps";
    }
  }

  
  return (
    <>
    <div className='changepage'>
    <h3 className='Heading'><b>Share your hiring requirements</b></h3>
    <Box className = "pagelable">
    <Stepper activeStep={activeStep} alternativeLabel >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
        <>
    {activeStep === steps.length ? (
      <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <h1><TaskAltSharpIcon /></h1>
          </Modal.Header>
          <Modal.Body><b>Your Hiring Requirements Submitted Successfully.</b></Modal.Body>
      </Modal>
      </>
    ) : (
    <> 
    <Box>
    {getStepsContent(activeStep)}
    </Box>
    <br />
    {/*<Button variant="contained" endIcon={<SendIcon />} onClick={handleNext}>{activeStep === steps.length ? "Finish" : "Next"}</Button>*/}
    </>
  )}
  </>
  </Box>
  </div>
    </>
  )
}

export default ChangePage

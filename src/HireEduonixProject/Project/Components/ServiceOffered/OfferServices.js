import React from 'react'
import './OfferServices.css'
import Card from 'react-bootstrap/Card';
import { MdPersonSearch } from "react-icons/md";
import { GoMailRead } from "react-icons/go";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GrCloudComputer } from "react-icons/gr";
import CardGroup from 'react-bootstrap/CardGroup';

const OfferServices = () => {
  return (
    <>
    <h4 className='CardHeading mt-3'>Services Offered</h4>
    <div className="container">
      <div className="row">
      <CardGroup>
        <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="Cardbox">
        <Card className="cardbox1">
        <Card.Body>
        <h1><MdPersonSearch/></h1>
        <Card.Title>Trained Freshers/Inter Hiring</Card.Title>
        <Card.Text>
        Hire young minds with relevant skills. Talent acquisition has never been easier. You can hire trained professionals for the exact skills that matches your requirements.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="Cardbox">
        <Card className="cardbox2">
        <Card.Body>
        <h1><GoMailRead/></h1>
        <Card.Title>Database Mailing</Card.Title>
        <Card.Text>
        Reach out to the right candidate at one go from our extensive talent pool of over a million Indian candidates. Your set parameters are used to select the best suited candidate that fits into your organization.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="Cardbox">
        <Card className="cardbox3">
        <Card.Body>
        <h1><AiOutlineFileSearch/></h1>
        <Card.Title>Job Postings</Card.Title>
        <Card.Text>
        Post your requirements & it will be met. Your search for the best ends here with batches full of relevant & trained freshers/professionals.{' '}
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="Cardbox">
        <Card className="cardbox4">
        <Card.Body>
        <h1><GrCloudComputer/></h1>
        <Card.Title>Manage your listings</Card.Title>
        <Card.Text>
        Save everything recruitment related all in one place so you can pick up where you left off. We cater to your recurring requirements.{' '}
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </div>
        </CardGroup>
      </div>
    </div>
    
    </>
  )
}

export default OfferServices

import React from 'react'

import './MidBody.css';
import { RiFileList2Line } from 'react-icons/ri';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { AiFillProfile } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import ChangePage from '../HireForms/ChangePage';

const MidBody = () => {
  
  return (
    <>
    <div className="title m-5">
    <h1>Skilled. Relevant. <b>Trained.</b><span className='lo'></span></h1>
  </div>
    <div className="container">
      <div className="row">
      <div className="col-xs-12 col-sm-6">
      <div className="boxA">
          <div className="timeline-container">
          <h2>The Best Awaits You</h2>
          <h1 className='icons'><RiFileList2Line/></h1>
            <div className="timeline">
            <div className='mid'>
            <h4>Your hiring requirements are met every time.</h4>
            <p>Share your candidate requirements & get relevant skilled & trained candidates. We have batches coming out every month full of trained candidates on specific tech/non-tech fields. </p>
            </div>
            </div>
            <h1 className='icons'><TfiHeadphoneAlt/></h1>
            <div className="timeline">
            <div className='mid'>
            <h4>Hire skilled candidates</h4>
            <p>We understand how hard it can be to get the right candidate each & every time. Hence, we bridge the gap between corporates & skilled candidates by bringing them together on this platform. </p>
            </div>
            </div>
            
            <h1 className='icons'><ImProfile/></h1>
            <div className="timeline">
            <div className='mid'>
            <h4>Explore & Recruit</h4>
            <p>Try the quality of candidates for free for 1 quarter. We have batches coming out every month full of trained candidates on specific tech fields</p>
            </div>
            </div>
            <h1 className='icons'><AiFillProfile /></h1>
            <div className="timeline" >
            <h4>Get ready for easy hiring</h4>
            <p>Hiring can be a tiring! Get on board for a hassle free experience. Set your own screening parameters along with the Job description & leave the rest to us. We will make the hiring process as easy as possible streamlining it all the way, just for you.</p>
            </div>
            </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
          <div className="boxA">
          <ChangePage/>
          </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default MidBody

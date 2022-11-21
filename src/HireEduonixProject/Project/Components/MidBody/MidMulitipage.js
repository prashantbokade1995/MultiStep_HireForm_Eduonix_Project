import React from 'react'
import './MidBody.css';
// import HireReq from '../HireForms/HireReq';<HireReq/>
// import HireFormtwo from '../HireForms/HireFormtwo';<HireFormtwo/>
import HireFormThree from '../HireForms/HireFormThree';
import MidBody from './MidBody';

const MidMulitipage = () => {
  return (
    <>
    <div className="title">
    <h1>Skilled. Relevant. <b>Trained</b><span className='lo'></span></h1>
     </div>
     <div className="container">
      <div className="row">
     <div className="col-xs-12 col-sm-6">
      <div className="box">
        <MidBody/>
      </div>
      </div>
      <div className="col-xs-12 col-sm-6">
      <div className="box">
      <HireFormThree/>
      </div>
      </div>
      </div>
      </div>
     </>
  )
}

export default MidMulitipage

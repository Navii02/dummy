//import React from 'react'
import Add from '../components/Add'
import {Link} from 'react-router-dom'
import {faClockRotateLeft  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Allvideos from '../components/Allvideos';
import Category from '../components/Category';
function Home() {
  return (
<>
<div className="container d-flex justify-content-between mt-5">
  <Add/>
  <Link to={'/watchhistory'} style={{textDecoration:'none'}}><h3><span className='d-md-inline d-none'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} /></h3></Link>
</div>
<div className="container-fluid p-4">
  <div className="row">
    <div className="col-md-9">
      <Allvideos/>
    </div>
    <div className="col-md-3">
      <Category/>
    </div>
  </div>
</div>
</>
  )
}

export default Home

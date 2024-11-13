//import React from 'react'
import { faHouse,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'


function Watchhistory() {
  return (
    <>
   <div className="d-flex justify-content-between px-5 mt-5">
    <h4>Watch History</h4>
    <Link to={'/home'} style={{textDecoration:'none'}}><h4><FontAwesomeIcon icon={faHouse}className='me-2'  /><span className='d-md-inline d-none'>Back Home</span></h4></Link>
   </div>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <table className="table table-bordered mt-5 table-responsive">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Caption</th>
            <th className="text-center">
              Url
            </th>
            <th className="text-center">Time Stamp</th>
            <th className="text-center"> Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td className="text-center">dummy</td>
            <td className="text-center"><Link to={''}>dummy</Link></td>
            <td className="text-center">dummy</td>
            <td className="text-center">
               <button className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="col-md-1"></div>
  </div>
</div>
<h2 className='text-center text-danger'> No Watch History</h2>
    </>
  )
}

export default Watchhistory

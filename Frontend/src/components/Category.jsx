//import React from 'react'
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Videicards from './Videicards';
function Category() {
  return (
    <>
    <h3 className="mt-5"> Catageory</h3>
    <button className="btn btn-warning mt-4 w-100 "> Add Catagery</button>
    <div className="border border-secondary p-3 rounded mt-4">
        <div className="d-flex justify-content-between">
            <h4>
                Malayalam Songs
            </h4>
            <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
        </div>
        <Videicards/>
    </div>
    </>
  )
}

export default Category

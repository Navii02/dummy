//import React from 'react'

import Videicards from "./Videicards"

function Allvideos() {
  return (
 <>
 <h3 className="mt-5" >All Videos</h3>
 <div className="container-fluid mt-5">
    <div className="row">
        <div className="col-md-3 p-3">
            <Videicards/>
        </div>
        <div className="col-md-3 p-3">
        <Videicards/>
        </div>
        <div className="col-md-3 p-3">
        <Videicards/>
        </div>
        <div className="col-md-3 p-3">
        <Videicards/>
        </div>
    </div>
 </div>
 <div className="container-fluid mt-5">
    <div className="row">
        <div className="col md-4"></div>
        <div className="col md-4">
            <img src="https://th.bing.com/th/id/OIP.0_NBShQOcmwpUv-GNVUSQwAAAA?rs=1&pid=ImgDetMain" alt="no image" className="w-100" style={{
                height:'200px',width:'200px'}} />
                  <h5 className="text-center text-danger mt-3"> No Videos Added Yet ...</h5>
        </div>
      
        <div className="col md-4"></div>
    </div>

 </div>
 </>
  )
}

export default Allvideos
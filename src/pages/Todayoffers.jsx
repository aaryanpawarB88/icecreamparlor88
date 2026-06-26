import React from 'react'
import './Todayoffers.css'
import Img1 from '../assets/Img1.png'

const Todayoffers = () => {
  return (
    <>
    <div className='container'>
        <div className="row">
            <div className="col-12">
                <iframe className='yt' src="https://www.youtube.com/embed/C4MHnVY-_rQ?si=VbYtSpi7gCVcXo4q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        </div>
        <img src={Img1} alt="" className='img-fluid customImg'/>

    </div>
    </> 
  )
}

export default Todayoffers

import React from 'react'
import './Franchise.css'
import { Link } from 'react-router-dom'

const Franchise = () => {
  return (
    <div className="b2">
    <div className="Delic"><b>Delicious Ice Cream Franchise</b></div>
    <p className="Delic">Own a Delicious Ice Cream Franchise!!!!</p>
    <p className="Delic2">Turn your passion for desserts into a successful business with Delicious Ice Cream. Join our growing franchise network and bring premium ice cream experiences to your city.</p>
    <p className="Delic">Start Your Journey Today !</p>
    <div className="text-center mt-3">
  <Link to="/apply-franchise" className="btn btn-secondary">
    Apply for Franchise
  </Link>
</div>
  
    <h2 className="mt-5 d-flex justify-content-center"><b>Why Choose Delicious Ice Cream ?</b></h2>
    <ol className="mt-5 d-flex justify-content-center">
    <b><i><li>Trusted and Growing Brand</li></i>
    <i><li>Wide Range of Premium Ice Cream Flavors</li></i>
    <i><li>Affordable Investment Plans</li></i>
    <i><li>Complete Business Training</li></i>
    <i><li>Marketing & Promotional Support</li></i>
    <i><li>High Customer Demand Throughout the Year</li></i></b>
    </ol>
    <h2 className="mt-5 d-flex justify-content-center"><b>Franchise Benefits</b></h2>
    <ul className="mt-5 d-flex justify-content-evenly">
    <li><b>Brand Recognition</b></li>
    <li><b>Store Setup Assistance</b></li>
    <li><b>Staff Training</b></li>
    <li><b>Product Supply Support</b></li>
    <li><b>Digital Marketing Guidance</b></li>
    <li><b>Ongoing Business Support</b></li>
    </ul>
    <h2 className="mt-5 d-flex justify-content-center"><b>Our Popular Products</b></h2>
    <p className="mt-5 d-flex justify-content-center"><b>🍦 Vanilla Delight</b></p>
    <p className="mt-4 d-flex justify-content-center"><b>🍫 Chocolate Heaven</b></p>
    <p className="mt-4 d-flex justify-content-center"><b>🍓 Strawberry Bliss</b></p>
    <p className="mt-4 d-flex justify-content-center"><b>🥭 Mango Magic</b></p>
    <p className="mt-4 d-flex justify-content-center"><b>🍨 Butterscotch Crunch</b></p>
    <p className="mt-4 d-flex justify-content-center"><b>🧇 Waffle Sundaes</b></p>
    <p className="mt-4 d-flex justify-content-center"><b>🥤 Milkshakes</b></p>
    </div>
  )
}

export default Franchise

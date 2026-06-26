import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './StoreLocator.css'

const StoreLocator = () => {
  return (
    <>
      <h1>StoreLocator</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Delicious Ice Cream Parlor</h3>
            <address>
            Sukhwani Niketan,<br />
            near rounak hotel,<br />
            pimpri pune<br />
            411017
            </address>
            <p>
                <MdEmail /> delicious1@gmail.com
            </p>
            <p>
                <FaPhone />8733002211
            </p>
            <div className="col">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.423009210781!2d73.84075607423723!3d18.509776982581684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16b72fbb4b9%3A0xace42c972cdd0bf4!2sAmul%20Ice%20Cream%20Parlour%20(Shri%20Datta%20Enterprises)!5e0!3m2!1sen!2sin!4v1781684710295!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreLocator;

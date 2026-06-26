import React from 'react';

const ApplyFranchise = () => {
  return (
    <div className="container mt-5">
      <h1>Apply for Franchise</h1>
      <p>Fill out the form below and our team will contact you.</p>

      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Investment Budget</label>
          <select className="form-select">
            <option>Select Budget</option>
            <option>₹5-10 Lakhs</option>
            <option>₹10-15 Lakhs</option>
            <option>₹15-20 Lakhs</option>
            <option>₹20+ Lakhs</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Tell us about your interest"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-warning">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyFranchise;
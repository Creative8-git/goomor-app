import React, { useState } from 'react';
import axios from 'axios';

const CompleteProfile = () => { 
  const [formDetails, setFormDetails] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    business_name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/users`, formDetails);
      alert('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating profile:', err);
      alert('There was an issue updating your profile.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="first_name" placeholder="First Name" value={formDetails.first_name} onChange={handleInputChange} required />
      <input name="last_name" placeholder="Last Name" value={formDetails.last_name} onChange={handleInputChange} required />
      <input name="phone_number" placeholder="Phone Number" value={formDetails.phone_number} onChange={handleInputChange} />
      <input name="business_name" placeholder="Business Name" value={formDetails.business_name} onChange={handleInputChange} />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default CompleteProfile;

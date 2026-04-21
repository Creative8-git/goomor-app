import React, { useEffect } from 'react';

const ContactDetails = ({ contactDetails, setContactDetails, user }) => {
  // ✅ Ensure the email is updated when the user logs in
  useEffect(() => {
    if (user?.email) {
      setContactDetails((prev) => ({ ...prev, Email: user.email }));
    }
  }, [user]); // ✅ This will now update when the user logs in

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setContactDetails((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="row">
      <div className="col-md-6 mt-2">
        <label>Contact Name</label>
        <input
          className="form-control"
          id="ContactName"
          placeholder="Your preferred contact name"
          value={contactDetails.ContactName || ''}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-6 mt-2">
        <label htmlFor="Number">Enter your phone number:</label>
        <input
          className="form-control"
          type="tel"
          id="Number"
          name="phone"
          placeholder="Your contact number"
          value={contactDetails.Number || ''}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-6 mt-2">
        <label htmlFor="Email">Contact email:</label>
        <input
          className="form-control"
          type="email"
          id="Email"
          name="Email"
          placeholder="Enter your email"
          value={contactDetails.Email || ''} // ✅ Autofill email
          onChange={handleInputChange} // ✅ Allow edits
        />
      </div>
      <div className="col-md-6 mt-2">
        <label htmlFor="Reference">Enter your Reference</label>
        <input
          className="form-control"
          id="Reference"
          name="Reference"
          placeholder="Your Reference code"
          value={contactDetails.Reference || ''}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ContactDetails;

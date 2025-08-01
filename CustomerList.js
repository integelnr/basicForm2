import React, { useState } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [touchedFields, setTouchedFields] = useState({});
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    secondaryMobile: '',
    address: '',
    gender: '',
    dob: '',
    aadharNo: '',
    panNo: '',
    dateOfJoining: '',
    chitGroup: ''
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in customer) {
      if (!customer[key]) {
        alert(`Please fill the ${key} field.`);
        return;
      }
    }
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const aadharPattern = /^\d{12}$/;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/i;

    if (!emailPattern.test(customer.email)) {
      alert('Please enter a valid email address without spaces.');
      return;
    }

    if (!phonePattern.test(customer.phone)) {
      alert('Phone number must contain exactly 10 digits only.');
      return;
    }

    if (!phonePattern.test(customer.secondaryMobile)) {
      alert('Secondary mobile must contain exactly 10 digits.');
      return;
    }

    if (!aadharPattern.test(customer.aadharNo)) {
      alert('Aadhar number must contain exactly 12 digits.');
      return;
    }

    if (!panPattern.test(customer.panNo)) {
      alert('PAN number must be in format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F).');
      return;
    }
    try {
      await axios.post('http://localhost:8080/api/customers', customer);
      alert('Customer details submitted successfully!');
      setCustomer({
        name: '',
        email: '',
        phone: '',
        secondaryMobile: '',
        address: '',
        gender: '',
        dob: '',
        aadharNo: '',
        panNo: '',
        dateOfJoining: '',
        chitGroup: ''
      });
    } catch (error) {
      alert('Error submitting customer details');
      console.error(error);
    }
  };
  const handleBlur = (e) => {
  const { name, value } = e.target;
  const trimmedValue = value.trim();

  // If already alerted once and value hasn't changed, skip re-alert
  if (touchedFields[name]) return;

  let isValid = true;
  let errorMessage = '';

  if (name === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedValue)) {
      isValid = false;
      errorMessage = "Invalid email address.";
    }
  }

  if (name === "phone" || name === "secondaryMobile") {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(trimmedValue)) {
      isValid = false;
      errorMessage = `${name === "phone" ? "Phone" : "Secondary mobile"} must be 10 digits.`;
    }
  }

  if (name === "aadharNo") {
    const aadharPattern = /^\d{12}$/;
    if (!aadharPattern.test(trimmedValue)) {
      isValid = false;
      errorMessage = "Aadhar number must be 12 digits.";
    }
  }

  if (name === "panNo") {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/i;
    if (!panPattern.test(trimmedValue)) {
      isValid = false;
      errorMessage = "PAN must be in format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F).";
    }
  }

  if (!isValid) {
    alert(errorMessage);
    setTouchedFields(prev => ({ ...prev, [name]: true }));
  } else {
    // Reset error flag if field becomes valid
    setTouchedFields(prev => ({ ...prev, [name]: false }));
  }
};

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Customer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name*</label>
          <input type="text" name="name" value={customer.name} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input type="email" name="email" value={customer.email} onChange={handleChange} onBlur={handleBlur} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone</label>
          <input type="text" name="phone" value={customer.phone} onChange={handleChange} onBlur={handleBlur}required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Secondary Mobile</label>
          <input type="text" name="secondaryMobile" value={customer.secondaryMobile} onChange={handleChange}onBlur={handleBlur} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address</label>
          <input type="text" name="address" value={customer.address} onChange={handleChange} required />
        </div>
        <label>Gender* :</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Transgender" onChange={handleChange} /> Transgender</label>
          </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Date of Birth</label>
          <input type="date" name="dob" value={customer.dob} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Aadhar Number</label>
          <input type="text" name="aadharNo" value={customer.aadharNo} onChange={handleChange}onBlur={handleBlur} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>PAN Number</label>
          <input type="text" name="panNo" value={customer.panNo} onChange={handleChange} onBlur={handleBlur}required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Date of Joining</label>
          <input type="date" name="dateOfJoining" value={customer.dateOfJoining} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Chit Group</label>
          <input type="text" name="chitGroup" value={customer.chitGroup} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomerList;

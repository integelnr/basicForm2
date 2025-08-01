// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css'; // Correct place for CSS import

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    gender: '',
    dob: '',
    occupation: '',
    collectionAgent: 'Admin',
    aadhar: '',
    pan: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <label>Name* :</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Father Name* :</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />

          <label>Gender* :</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Transgender" onChange={handleChange} /> Transgender</label>
          </div>

          <label>Date Of Birth* :</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

          <label>Occupation :</label>
          <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />

          <label>Collection Agent* :</label>
          <select name="collectionAgent" value={formData.collectionAgent} onChange={handleChange} required>
            <option value="Admin">Admin</option>
            <option value="Agent 1">Agent 1</option>
            <option value="Agent 2">Agent 2</option>
          </select>

          <label>Aadhar No* :</label>
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} required />

          <label>PAN No* :</label>
          <input type="text" name="pan" value={formData.pan} onChange={handleChange} required />

          <label>Mobile1* :</label>
          <input type="text" name="mobile1" value={formData.mobile1} onChange={handleChange} required />

          <label>Mobile2:</label>
          <input type="text" name="mobile2" value={formData.mobile2} onChange={handleChange} />

          <label>Mobile3:</label>
          <input type="text" name="mobile3" value={formData.mobile3} onChange={handleChange} />

          <label>Email Id :</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

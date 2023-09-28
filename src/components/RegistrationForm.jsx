import React, { useState } from 'react';
import { registerUser } from '../components/Api';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    
  });

  const [registrationError, setRegistrationError] = useState(null);

  // Create a function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Create a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the registration API with formData
    registerUser(formData)
      .then((response) => {
    
        console.log('Registration successful:', response);
        // Clear form or navigate to the next page
      })
      .catch((error) => {
    
        console.error('Registration error:', error.message);
        setRegistrationError('Registration failed. Please try again.'); // Set error message state
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

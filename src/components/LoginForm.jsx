import React, { useState } from 'react';
import { loginUser } from '../components/Api'; // Import your login API function

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginError, setLoginError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the login API with formData
    loginUser(formData)
      .then((response) => {
    
        console.log('Login successful:', response);
        localStorage.setItem('token', response.token);
      })
      .catch((error) => {
        
        console.error('Login error:', error.message);
        setLoginError('Login failed. Please check your credentials.'); // Set error message state
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
      {loginError && <p className="error">{loginError}</p>}
    </form>
  );
}

export default LoginForm;

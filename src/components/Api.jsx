

const API_BASE_URL = 'https://fakestoreapi.com';

// Function to fetch all products
export const getProducts = () => {
  return fetch(`${API_BASE_URL}/products`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching products:', error);
      throw error;
    });
};

// Function to fetch a single product by ID
export const getProductById = (productId) => {
  return fetch(`${API_BASE_URL}/products/${productId}`)
    .then(res => res.json())
    .catch(error => {
      console.error(`Error fetching product ${productId}:`, error);
      throw error;
    });
};

// Function to fetch products in a specific category
export const getProductsByCategory = (category) => {
  return fetch(`${API_BASE_URL}/products/category/${category}`)
    .then(res => res.json())
    .catch(error => {
      console.error(`Error fetching products in category ${category}:`, error);
      throw error;
    });
};

export const registerUser = (formData) => {
  return fetch('https://fakestoreapi.com/users', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error('Registration failed');
    }
    return res.json();
  })
  .then((json) => {
    
    return json;
  })
  .catch((error) => {

    throw error;
  });
}

export const loginUser = (credentials) => {
  return fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    })
    .then((data) => {
      // Handle successful login
      return data; // return the user token here
    })
    .catch((error) => {
      // Handle login error
      throw new Error(error.message);
    });
}


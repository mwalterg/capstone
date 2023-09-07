

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



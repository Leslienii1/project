// Sample product data (replace with data from a backend/database)
const products = [
    { id: 1, name: "Phone Case", price: "$15.00", image: "https://via.placeholder.com/150", description: "Durable and stylish phone case." },
    { id: 2, name: "Screen Protector", price: "$10.00", image: "https://via.placeholder.com/150", description: "High-quality screen protector." },
    { id: 3, name: "Apple Watch Strap", price: "$25.00", image: "https://via.placeholder.com/150", description: "Comfortable and elegant watch strap." }
  ];
  
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  // Display product details
  const product = products.find(p => p.id == productId);
  if (product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-price').textContent = `Price: ${product.price}`;
    document.getElementById('product-description').textContent = `Description: ${product.description}`;
  }
  
  // Add to Cart function
  function addToCart() {
    alert(`${product.name} added to cart!`);
  }
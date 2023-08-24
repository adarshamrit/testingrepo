import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Payment from './components/Payment';
// ...


const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Baby Girl');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products based on the selected category
    fetch(`http://localhost:5000/products?category=${selectedCategory}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [selectedCategory]);

  const categories = ['Baby Girl', 'Baby Boy', 'Toddler', 'Kid'];

  const handleProductClick = productId => {
    const product = products.find(product => product.id === productId);
    setSelectedProduct(product);
  };
  const handleBackToMain = () => {
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar
            categories={categories}
            onCategoryChange={category => setSelectedCategory(category)}
          />
          <Routes>
            <Route path="/" element={
              selectedProduct ? (
                <ProductDetail product={selectedProduct} onBackToMain={handleBackToMain} />
              ) : (
                <ProductList products={products} onProductClick={handleProductClick} />
              )
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment/>} />
            

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
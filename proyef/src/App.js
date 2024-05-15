import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Login from './componentes/login';
import Categories from './componentes/categories';
import Products from './componentes/products';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Entre MÁS Mejor</h1>
        {isAuthenticated ? (
          <div className="content">
            <Categories onCategorySelect={handleCategorySelect} />
            {selectedCategory && <Products categoryId={selectedCategory} />}
          </div>
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </header>
    </div>
  );
}

export default App;

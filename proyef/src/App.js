import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './componentes/login';
import Registro from './componentes/registro';
import Categories from './componentes/categories';
import Products from './componentes/products';
import Carrito from './componentes/Carrito';
import cartIcon from './assets/cart-shopping.png';
import Recovery from './componentes/recovery';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Entre Más Mej👽r</h1>
          {isAuthenticated && (
            <div className="header-buttons">
              <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
              <button className="cart-button" onClick={() => window.location.href = '/carrito'}>
                <img src={cartIcon} alt="" className="carrito-icon" />
              </button>
            </div>
          )}
        </header>
        <main className="App-content">
          <Switch>
            <Route path="/" exact>
              {isAuthenticated ? (
                <div className="content">
                  <Categories onCategorySelect={handleCategorySelect} />
                  {selectedCategory && <Products categoryId={selectedCategory} />}
                </div>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/login">
              {isAuthenticated ? (
                <Redirect to="/" />
              ) : (
                <div className="login-wrapper">
                  <Login onLoginSuccess={handleLoginSuccess} />
                </div>
              )}
            </Route>
            <Route path="/registro">
              <div className="registro-wrapper">
                <Registro />
              </div>
            </Route>
            <Route path="/olvido-contraseña">
              <div className="recovery-wrapper">
                <Recovery />
              </div>
            </Route>
            <Route path="/carrito">
              <Carrito onLogout={handleLogout} />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

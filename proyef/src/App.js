//import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './componentes/login';
import Registro from './componentes/registro';
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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Entre MÁS Mejor</h1>
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
                <Login onLoginSuccess={handleLoginSuccess} />
              )}
            </Route>
            <Route path="/registro" component={Registro} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

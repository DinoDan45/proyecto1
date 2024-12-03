import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../stilos/carrito.css';

function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:3000/api/carrito') 
            .then(response => response.json())
            .then(data => setCarrito(data));
    }, []);

    const handleLogout = () => {
        history.push('/login');
    };

    return (
        <div className="carrito-container">
            <div className="carrito-header">
                <div className="header-buttons">
                    <Link to="/">
                        <button className="transaccion-button">Transacción</button>
                    </Link>
                    <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
                </div>
                <h2>Carrito</h2>
            </div>
            <ul className="carrito-list">
                {carrito.map(item => (
                    <li key={item.id} className="product-item">
                        <h3>{item.nombre_producto}</h3>
                        <p>Precio: {item.precio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Carrito;

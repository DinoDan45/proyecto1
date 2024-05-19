import React, { useState, useEffect } from 'react';

function Products({ categoryId }) {
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch(`http://localhost:3000/api/productos/${categoryId}`)
        .then(response => response.json())
        .then(data => setProducts(data));
}, [categoryId]);

return (
    <div className="products">
    <h2>Productos</h2>
    <ul>
        {products.map(product => (
        <li key={product.id_producto}>
            <h3>{product.nombre_producto}</h3>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
            <button onClick={() => addToCart(product.id_producto)}>Agregar al carrito</button>
        </li>
        ))}
    </ul>
    </div>
);

function addToCart(productId) {
    const userId = "id_del_usuario"; // con el id del usuario autenticado
    const cantidad = 1; 
    fetch('http://localhost:5040/api/carrito', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id_usuario: userId, id_producto: productId, cantidad })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
        alert('Producto agregado al carrito');
        } else {
        alert('Error al agregar el producto al carrito');
        }
    });
}
}

export default Products;

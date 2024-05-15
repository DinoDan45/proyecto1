import React, { useState, useEffect } from 'react';

function Products({ categoryId }) {
const [products, setProducts] = useState([]);

useEffect(() => {
    if (categoryId) {
    fetch(`http://localhost:5040/api/productos/${categoryId}`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
}, [categoryId]);

return (
    <div className="products">
    <h2>Productos</h2>
    <ul>
        {products.map(product => (
        <li key={product.id}>{product.name}</li>
        ))}
    </ul>
    </div>
);
}

export default Products;

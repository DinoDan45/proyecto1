import React, { useState, useEffect } from 'react';

function Categories({ onCategorySelect }) {
const [categories, setCategories] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/api/categorias')
    .then(response => response.json())
    .then(data => setCategories(data));
}, []);

return (
    <div className="categories">
    <h2>Categorías</h2>
    <ul>
        {categories.map(category => (
        <li key={category.id_categoria} onClick={() => onCategorySelect(category.id_categoria)}>
            {category.nombre_categoria}
        </li>
        ))}
    </ul>
    </div>
);
}

export default Categories;

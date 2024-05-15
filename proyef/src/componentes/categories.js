import React, { useState, useEffect } from 'react';

function Categories({ onCategorySelect }) {
const [categories, setCategories] = useState([]);

useEffect(() => {
    fetch('http://localhost:5040/api/categorias')
    .then(response => response.json())
    .then(data => setCategories(data));
}, []);

return (
    <div className="categories">
    <h2>Categorías</h2>
    <ul>
        {categories.map(category => (
        <li key={category.id} onClick={() => onCategorySelect(category.id)}>
            {category.name}
        </li>
        ))}
    </ul>
    </div>
);
}

export default Categories;

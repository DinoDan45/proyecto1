import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import '../stilos/categories.css';

function Categories({ onCategorySelect }) {
    const [categories, setCategories] = useState([]);
    //const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:3000/api/categorias')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    //const handleLogout = () => {
    //    history.push('/login');
    //};

    return (
        <div className="categories-container">
            <div className="categories-list">
                <h2>Categorías</h2>
                <ul>
                    {categories.map(category => (
                        <li key={category.id_categoria} onClick={() => onCategorySelect(category.id_categoria)} className="category-item">
                            {category.nombre_categoria}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Categories;

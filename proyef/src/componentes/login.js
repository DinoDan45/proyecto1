import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../stilos/login.css';

function Login({ onLoginSuccess }) {
    const [id_usuario, setUsername] = useState('');
    const [contraseña, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id_usuario, contraseña })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.success) {
                onLoginSuccess();
                history.push('/categorias');
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Failed to fetch', error);
            alert('Error al conectar con el servidor');
        }
    };

    return (
        <div className="login-container">
            <div className="presentacion-mensaje">
                ¡Bienvenido a nuestra tienda! Nos complace ofrecerte una experiencia de compra inigualable, donde cada visita es un placer y cada compra, una satisfacción. Descubre una variedad de productos cuidadosamente seleccionados para brindarte lo mejor en calidad. 
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Usuario:
                    <input 
                        type="text" 
                        value={id_usuario}
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Contraseña:
                    <input 
                        type="password" 
                        value={contraseña}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <div className="login-options">
                <Link to="/registro" className="register-link">¿No tienes cuenta? Regístrate aquí</Link>
                <span style={{ marginLeft: '30px' }}></span>
                <Link to="/olvido-contraseña" className="forgot-password-link">¿Olvidaste tu contraseña?</Link>
            </div>
        </div>
    );
}

export default Login;

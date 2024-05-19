import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../stilos/login.css';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [contrasena, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Omitir la verificación de las credenciales por ahora
        // const response = await fetch('http://localhost:3000/api/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username, contrasena })
        // });
        // const data = await response.json();
        // if (data.success) {
        //     onLoginSuccess();
        //     history.push('/categorias');
        // } else {
        //     alert('Credenciales incorrectas');
        // }

        // Simplemente redirigir a la página de categorías
        onLoginSuccess();
        history.push('/categorias');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Usuario:
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Contraseña:
                    <input 
                        type="password" 
                        value={contrasena}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <Link to="/registro" className="register-link">¿No tienes cuenta? Regístrate aquí</Link>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import '../stilos/login.css';

function Login({ onLoginSuccess }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5040/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.success) {
    onLoginSuccess();
    } else {
    alert('Credenciales incorrectas');
    }
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
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
        />
        </label>
        <button type="submit">Iniciar Sesión</button>
    </form>
    </div>
);
}

export default Login;


import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const validateLogin = () => {
        if (username.trim() === "" || password.trim() === "") {
            setError(true);
        } else {
            setError(false);
            alert("Inicio de sesión exitoso");
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <input 
                type="text" 
                placeholder="Usuario" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required 
            />
            <input 
                type="password" 
                placeholder="Contraseña" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
            <button onClick={validateLogin}>Ingresar</button>
            {error && <p className="error-message">Por favor, complete todos los campos.</p>}
        </div>
    );
};

export default Login;
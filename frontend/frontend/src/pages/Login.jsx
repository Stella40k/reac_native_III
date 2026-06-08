import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🌿 Herbarium Arcana 🌿</h1>

        <p className="subtitle">Accede a tu grimorio botánico</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre de usuario" />

          <input type="password" placeholder="Contraseña" />

          <button type="submit">Entrar al Jardín</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

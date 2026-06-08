import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loginUsuario, registerUsuario } from "../services/authService";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [esRegistro, setEsRegistro] = useState(false);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");

    if (usuario) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (esRegistro) {
        const respuesta = await registerUsuario({
          nombre,
          email,
          password,
        });

        localStorage.setItem("usuario", JSON.stringify(respuesta.data));

        navigate("/home");
      } else {
        const respuesta = await loginUsuario({
          email,
          password,
        });

        localStorage.setItem("usuario", JSON.stringify(respuesta.data));

        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      setError(
        esRegistro
          ? "No se pudo registrar el usuario"
          : "Correo o contraseña incorrectos",
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🌿 Herbario Arcano 🌿</h1>

        <p className="subtitle">
          {esRegistro
            ? "Crea tu grimorio botánico"
            : "Accede a tu grimorio botánico"}
        </p>

        <form onSubmit={handleSubmit}>
          {esRegistro && (
            <input
              type="text"
              placeholder="Nombre de herborista"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Correo mágico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {esRegistro ? "Crear Cuenta" : "Entrar al Jardín"}
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}

        <p className="link-text">
          {esRegistro ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setError("");
              setEsRegistro(!esRegistro);
            }}
          >
            {esRegistro ? " Iniciar sesión" : " Crear cuenta"}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

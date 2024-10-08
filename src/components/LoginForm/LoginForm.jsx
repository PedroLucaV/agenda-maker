import { useState } from "react";
import api from "../../pages/Login/api.js";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ setErrors }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@(aluno|docente)\.sesi\.com\.br$/.test(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!email || !validateEmail(email)) {
      formErrors.email =
        'Email é obrigatório e deve seguir o formato "aluno.sesi.com.br" ou "docente.sesi.com.br".';
    }
    if (!senha) {
      formErrors.senha = "Senha é obrigatória.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await api.post("/users/login", {
        email,
        senha,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrors({ apiError: "Erro ao fazer login." });
    }
  };

  return (
    <form onSubmit={handleSubmit} method="dialog">
      <div className="mb-3">
        <label className="form-label">Email*</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Senha*</label>
        <input
          type="password"
          className="form-control"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>
      <Link to="/dashboard" relative="route">
        <button className="btn btn-primary">Logar</button>
      </Link>
    </form>
  );
};

export default LoginForm;

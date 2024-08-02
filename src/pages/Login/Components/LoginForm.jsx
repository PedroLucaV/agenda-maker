import React, { useState } from 'react';
import api from '../api.js';

const LoginForm = ({ setErrors }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@(aluno|docente)\.sesi\.com\.br$/.test(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!email || !validateEmail(email)) {
      formErrors.email = 'Email é obrigatório e deve seguir o formato "aluno.sesi.com.br" ou "docente.sesi.com.br".';
    }
    if (!senha) {
      formErrors.senha = 'Senha é obrigatória.';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await api.post('/users/login', { // Use a instância do axios
        email,
        senha
      });
      console.log(response.data);
      // Redirecionar ou mostrar mensagem de sucesso aqui
    } catch (error) {
      console.error(error);
      setErrors({ apiError: 'Erro ao fazer login.' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" className="btn btn-primary">Logar</button>
    </form>
  );
};

export default LoginForm;

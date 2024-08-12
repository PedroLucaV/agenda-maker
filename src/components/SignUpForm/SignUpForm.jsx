import { useState } from 'react';
import api from '../../pages/Login/api.js'; // Importe a instância do axios

const SignupForm = ({ setErrors }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const validateNome = (nome) => /^[a-zA-Z\s]+$/.test(nome);
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@(aluno|docente)\.sesi\.com\.br$/.test(email);
  const validateSenha = (senha) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(senha);
  const validateTelefone = (telefone) => /^[0-9]+$/.test(telefone);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!nome || !validateNome(nome)) {
      formErrors.nome = 'Nome é obrigatório e deve conter apenas letras.';
    }
    if (!email || !validateEmail(email)) {
      formErrors.email = 'Email é obrigatório e deve seguir o formato "aluno.sesi.com.br" ou "docente.sesi.com.br".';
    }
    if (!senha || !validateSenha(senha)) {
      formErrors.senha = 'Senha é obrigatória.';
    } else {
      let senhaErrors = [];
      if (!/(?=.*[a-z])/.test(senha)) {
        senhaErrors.push('Deve conter ao menos uma letra minúscula.');
      }
      if (!/(?=.*[A-Z])/.test(senha)) {
        senhaErrors.push('Deve conter ao menos uma letra maiúscula.');
      }
      if (!/(?=.*\d)/.test(senha)) {
        senhaErrors.push('Deve conter ao menos um número.');
      }
      if (!/(?=.*[@$!%*?&])/.test(senha)) {
        senhaErrors.push('Deve conter ao menos um caractere especial.');
      }
      if (!/.{8,}/.test(senha)) {
        senhaErrors.push('Deve conter ao menos 8 caracteres.');
      }
      if (senhaErrors.length > 0) {
        formErrors.senha = senhaErrors;
      }
    }
    if (!telefone || !validateTelefone(telefone)) {
      formErrors.telefone = 'Telefone é obrigatório e deve conter apenas números.';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await api.post('/users/criar', { // Use a instância do axios
        nome,
        email,
        senha,
        telefone
      });
      console.log(response.data);
      // Redirecionar ou mostrar mensagem de sucesso aqui
    } catch (error) {
      console.error(error);
      setErrors({ apiError: 'Erro ao criar usuário.' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nome*</label>
        <input
          type="text"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
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
      <div className="mb-3">
        <label className="form-label">Telefone*</label>
        <input
          type="text"
          className="form-control"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Cadastrar</button>
    </form>
  );
};
SignupForm.propTypes = {
  setErrors: Object.isRequired
}

export default SignupForm;

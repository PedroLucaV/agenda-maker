import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignUpForm/SignUpForm";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e cadastro
  const [errors, setErrors] = useState({}); // Estado para erros

  return (
    <main className="page-body">
      <div className="container">
        <h2 id="container-title" className="fs-1 fw-bold">
          {isLogin ? "Login" : "Crie uma Conta"}
        </h2>
        {errors.apiError && (
          <div className="alert alert-danger">{errors.apiError}</div>
        )}
        {isLogin ? (
          <LoginForm setErrors={setErrors} />
        ) : (
          <SignupForm setErrors={setErrors} />
        )}
        <button
          className="btn btn-secondary mt-3"
          onClick={() => setIsLogin(!isLogin)} // Alternar entre login e cadastro
        >
          {isLogin
            ? "Não tem uma conta? Cadastre-se"
            : "Já tem uma conta? Faça login"}
        </button>
      </div>
    </main>
  );
};

export default Login;

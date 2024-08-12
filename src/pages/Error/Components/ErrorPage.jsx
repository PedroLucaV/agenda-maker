const ErrorPage = ({errorStatus, errorMsg}) => {
  return (
    <div className="container justify-content-center d-flex flex-column align-items-center">
      <h1>Não há nada aqui.</h1>
      
      <img src="/errorImage.png" alt="" />

      <span className="d-flex align-items-center flex-column">
        <h2>{"Erro " + errorStatus && "Erro ao acessar o destino."}</h2>
        <h3>{errorMsg}</h3>
      </span>
    </div>
  );
};

export default ErrorPage;

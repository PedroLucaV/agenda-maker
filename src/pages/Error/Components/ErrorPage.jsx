const ErrorPage = () => {
    return(
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <h1>Não há nada aqui.</h1>
            <img src="/errorImage.png" alt="" />
            <span className="d-flex align-items-center flex-column">
                <h2>Erro 404</h2>
                <h3>Página não encontrada</h3>
            </span>
        </div>
    );
}

export default ErrorPage;

import agendaMakerLogo from '../../../assets/images/logo_agenda_maker.png'

const HomeContainer = () => {
    const goToLogin = () => {
      window.location.href = '/login';
    }

    return (
      <div className="container home-container bg-white rounded shadow">
        <div className="separator"></div>
        <div className="left-section">
          <h1>AGENDA MAKER</h1>
          <img src={agendaMakerLogo} alt="AM Logo" className="img-fluid my-3" />
          <div className="my-3">
            <img src="/sesi-senai-logo.png" alt="SESI SENAI Logo" className="img-fluid" />
          </div>
        </div>
        <div className="right-section d-flex">
          <h2>Uma forma de simplificar seu agendamento na Maker</h2>
          <ul className="list-unstyled my-3">
            <li className="mb-2">
              <i className="bi bi-check-circle"></i> 
              <p className='text-lis'>A melhor praticidade no agendamento e checagem de horário</p>
            </li>
            <li className="mb-2">
              <i className="bi bi-gear"></i> 
              <p className='text-lis'>Suporte e Automação de agendamentos e contato!</p>
            </li>
            <li className="mb-2">
              <i className="bi bi-calendar3"></i> 
              <p className='text-lis'>Calendário dinâmico e adaptado para feriados e datas comemorativas!</p>
            </li>
          </ul>
          <button onClick={goToLogin} className="btn login-btn btn-dark d-flex align-items-center">
            <p className=''>Sign In</p>
          </button>
        </div>
      </div>
const Container = () => {
    return(
        <div className="d-flex justify-content-center bg-light container">Main</div>

    );
}

export default Container;
import "./Calendar.css";

import ArrowPng from "../../../assets/images/left-facing-arrow.png";

const Calendar = () => {
  return (
    <section className="container calendar border-0 rounded-4">
      <header className="header d-flex px-4 py-4 border-0 rounded-top-4">
        <img className="lf" src={ArrowPng} alt="Seta para ver o mês anterior" />
        <h1 className="title">
          <span className="month">Mês</span> 
          {" "} de {" "}
          <span className="year">Ano</span>
        </h1>
        <img className="rf" src={ArrowPng} alt="Seta para ver o próximo mês" />
      </header>
    </section>
  );
};

export default Calendar;

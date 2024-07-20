import "./Calendar.css";

import ArrowPng from "../../../assets/images/left-facing-arrow.png";

const Calendar = () => {
  return (
    <section className="container calendar">
      <header className="header">
        <img className="lf" src={ArrowPng} alt="Seta para ver o mês anterior" />
        <h1 className="title">
          Mês de {" "}
          <span>Ano</span>
        </h1>
        <img className="rf" src={ArrowPng} alt="Seta para ver o próximo mês" />
      </header>
    </section>
  );
};

export default Calendar;

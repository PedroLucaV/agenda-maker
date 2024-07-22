// Dependencies:
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// Resources:
import ArrowPng from "../../../assets/images/left-facing-arrow.png";

// Stylesheets:
import "./Calendar.css";

const onEventClick = (info) => {
  alert(`Um evento foi clicado! \nNome: ${info.title}`);
};

const Calendar = () => {
  return (
    <section className="container calendar p-4 h-100 border-0 rounded-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={"pt-br"}
        buttonText={{
          today: "Ir para hoje",
        }}
        eventClick={({ event }) => onEventClick(event)}
        events={[
          { title: "Olá mundo!", date: "2024-07-22" },
          { title: "Aniversário da Empresa", date: "2024-07-02" },
        ]}
      />
    </section>
  );
};

export default Calendar;

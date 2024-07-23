// Dependencies:
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// Stylesheets:
import "./Calendar.css";

const onEventClick = (info) => {
  alert(`Um evento foi clicado! \nNome: ${info.title}`);
};

const onDateClick = (info) => {
  alert(`Uma data foi clicada! \nNome: ${info}`);
};

const Calendar = () => {
  return (
    <section className="container calendar p-4 h-100 border-0 rounded-4">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
        themeSystem="bootstrap5"
        initialView="dayGridMonth"
        locale={"pt-br"}
        headerToolbar={{
          start: 'prev', 
          center: 'title',
          end: 'next'
        }}
        footerToolbar={{
          start: 'today',
          end: 'dayGridMonth,multiMonthYear'
        }}
        buttonText={{
          today: "Ir para hoje",
          dayGridMonth: "Mês",
          multiMonthYear: "Ano"
        }}
        eventClick={({ event }) => onEventClick(event)}
        dateClick={({ dateStr }) => onDateClick(dateStr)}
        events={[
          { title: "Olá mundo!", date: "2024-07-22" },
          { title: "Aniversário da Empresa", date: "2024-07-02" },
        ]}
      />
    </section>
  );
};

export default Calendar;

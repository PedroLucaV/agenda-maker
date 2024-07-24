// Dependencies:
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import timeGridPlugin from "@fullcalendar/timegrid";

// Stylesheets:
import "./Calendar.css";

// Modules:
import onDateClick from "../../../modules/onDateClick";
import onEventClick from "../../../modules/onEventClick";

const Calendar = () => {
  return (
    <section className="container calendar h-100 border-0 rounded-4">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          multiMonthPlugin,
          timeGridPlugin,
        ]}
        themeSystem="bootstrap5"
        initialView="dayGridMonth"
        locale={"pt-br"}
        headerToolbar={{
          start: "timeGridWeek,dayGridMonth,multiMonthYear",
          center: "title",
          end: "today prev,next",
        }}
        buttonText={{
          today: "Data atual",
          dayGridMonth: "Mês",
          multiMonthYear: "Ano",
          timeGridWeek: "Semana",
        }}
        eventClick={({event}) => onEventClick(event)}
        dateClick={(date) => onDateClick(date)}
        events={[
          { title: "Olá mundo!", date: "2024-07-22" },
          { title: "Aniversário da Empresa", date: "2024-07-02" },
        ]}
      />
    </section>
  );
};

export default Calendar;

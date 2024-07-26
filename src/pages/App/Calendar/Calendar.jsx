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
import { july_2024 } from "../../../modules/eventArrays";

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
        contentHeight="675px"
        themeSystem="bootstrap5"
        locale={"pt-br"}
        overlap={"false"}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "timeGridWeek,dayGridMonth,multiMonthYear",
          center: "title",
          end: "today prev,next",
        }}
        views={{
          dayGridMonth: {
            dayHeaderFormat: { weekday: "long" }
          },
          timeGridWeek: {
            dayHeaderFormat: { weekday: "narrow", month: 'numeric', day: 'numeric' }
          },
          multiMonthYear: {
            dayHeaderFormat: { weekday: "narrow" },
            fixedWeekCount: false
          }
        }}
        validRange={{
          start: '2024-01-01'
        }}
        businessHours={{
          daysOfWeek: [ 1, 2, 3, 4, 5 ], // Segunda - Sexta
          startTime: '6:15',
          endTime: '19:45'
        }}
        buttonText={{
          today: "Data atual",
          dayGridMonth: "Mês",
          multiMonthYear: "Ano",
          timeGridWeek: "Semana",
        }}
        eventClick={({event}) => onEventClick(event)}
        dateClick={(date) => onDateClick(date)}
        events={july_2024}
      />
    </section>
  );
};

export default Calendar;

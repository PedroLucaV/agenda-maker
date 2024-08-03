// Dependencies:
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import timeGridPlugin from "@fullcalendar/timegrid";

// Stylesheets:
import "./Calendar.css";

// Modules:
import { useRef, useState } from "react";
import getEventList from "../../api/getEventList";
import onDateClick from "../../utils/onDateClick";
import onEventClick from "../../utils/onEventClick";
import BtnCreateEvent from "../BtnCreateEvent/BtnCreateEvent";

const Calendar = () => {
  const calendarRef = useRef(null);
  const [eventList, setEventList] = useState([]);
  getEventList(setEventList);

  return (
    <section id="calendarWrapper" className="calendar h-100 border-0 rounded-4">
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          multiMonthPlugin,
          timeGridPlugin,
        ]}
        contentHeight="675px"
        themeSystem="bootstrap5"
        locale={"pt-br"}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "timeGridWeek,dayGridMonth,multiMonthYear",
          center: "title",
          end: "today prev,next",
        }}
        views={{
          dayGridMonth: {
            dayHeaderFormat: { weekday: "long" },
            dayMaxEvents: 3,
          },
          timeGridWeek: {
            dayHeaderFormat: {
              weekday: "narrow",
              month: "numeric",
              day: "numeric",
            },
            eventMaxStack: 2,
            nowIndicator: true,
          },
          multiMonthYear: {
            dayHeaderFormat: { weekday: "narrow" },
            fixedWeekCount: false,
          },
        }}
        validRange={{
          start: "2024-01-01",
        }}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5], // Segunda - Sexta
          startTime: "6:15",
          endTime: "19:45",
        }}
        buttonText={{
          today: "Data atual",
          dayGridMonth: "Mês",
          multiMonthYear: "Ano",
          timeGridWeek: "Semana",
        }}
        eventClick={
          /* SUBSTITUA A FUNÇÃO ABAIXO PARA INSERIR AS OPÇÕES DE EVENTO */
          ({ event }) => onEventClick(event)
        }
        dateClick={
          /* SUBSTITUA A FUNÇÃO ABAIXO PARA INSERIR AS OPÇÕES DE DATA */
          (date) => onDateClick(date, calendarRef)
        }
        events={eventList}
      />
      <BtnCreateEvent text="Criar um evento" />
    </section>
  );
};

export default Calendar;

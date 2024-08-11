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
import GetEventList from "../../api/GetEventList";
import onDateClick from "../../utils/onDateClick";
import onEventClick from "../../utils/onEventClick";
import BtnTriggerEvent from "../BtnTriggerEvent/BtnTriggerEvent";

// Tests:
import createEvent from "../../tests/createEventTester";

const Calendar = () => {
  const [loading, setLoading] = useState(false)
  const [eventList, setEventList] = useState([]);
  const calendarRef = useRef(null);
  
  GetEventList(setEventList, loading, setLoading);

  return (
    <section id="calendarWrapper" className="calendar h-100 border-0 rounded-4">
      {
        loading ? (
          <div 
            id="loadingScreen"
            className="z-2 position-absolute d-flex flex-column align-items-center justify-content-center"
          >
            <h1 className="fw-semibold">Carregando...</h1>
            <p className="fs-4">Por favor, aguarde um instante.</p>
          </div>
        ) : (
          console.log("[API] Conteúdo carregado com sucesso.")
        )
      }
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
      {/* <div className="temp-wrapper d-flex flex-row justify-content-between">
        <BtnTriggerEvent 
          text="Criar um evento" 
          type="btn-primary" 
          callback={createEvent} />
      </div> */}
    </section>
  );
};

export default Calendar;

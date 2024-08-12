// Dependencies:
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import timeGridPlugin from "@fullcalendar/timegrid";

// Stylesheets:
import "./Calendar.css";

/* eslint-disable no-unused-vars */

// React Components / Modules:
import { useRef, useState } from "react";
import GetEventList from "../../api/GetEventList";
import BtnTriggerEvent from "../BtnTriggerEvent/BtnTriggerEvent";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

// JS Utils / Tests:
import { 
  global as gbItems, 
  adminOnly as admItems 
} from "../../utils/contextMenuItems";
import createEvent from "../../tests/createEventTester";
import onDateClick from "../../utils/onDateClick";
import onEventClick from "../../utils/onEventClick";
import ContextMenu from "../ContextMenu/ContextMenu";

const isAdmin = false

const handleContextMenu = (arg, ref, menuSetter) => {
  arg.el.addEventListener("contextmenu", (jsEvent) => {
    jsEvent.preventDefault()
    console.log(arg)

    const items = gbItems

    if (isAdmin) {
      items.unshift(...admItems)
    }

    menuSetter({
      xPos: arg.el.offsetLeft + 350,
      yPos: arg.el.offsetTop + 35,
      items,
    });
  })
}

const Calendar = () => {
  // Render modals:
  const [loading, setLoading] = useState(false)
  const [eventList, setEventList] = useState([]);
  GetEventList(setEventList, loading, setLoading);

  // Context menu modals:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const handleClick = () => {
    setMenu(null);
  };

  // Calendar instance:
  const calendarRef = useRef(null);

  return (
    <section 
      id="calendarWrapper" 
      className="calendar h-100 border-0 rounded-4"
      onClick={() => setMenu(null)}  
    >
      <LoadingScreen loader={loading} />
      {menu && <ContextMenu {...menu} onClose={handleClick} />}
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
            slotLaneDidMount: handleContextMenu
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
        dayCellDidMount={(arg) => handleContextMenu(arg, calendarRef, setMenu)}
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

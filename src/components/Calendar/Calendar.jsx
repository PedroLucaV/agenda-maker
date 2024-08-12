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
import {
  FaCopy,
  FaPlus,
  FaTrash,
  FaCalendar,
  FaCheckSquare,
  FaEdit,
} from "react-icons/fa";
import { useRef, useState } from "react";
import GetEventList from "../../api/GetEventList";
import BtnTriggerEvent from "../BtnTriggerEvent/BtnTriggerEvent";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

// JS Utils / Tests:
import createEvent from "../../tests/createEventTester";
import onDateClick from "../../utils/onDateClick";
import onEventClick from "../../utils/onEventClick";
import ContextMenu from "../ContextMenu/ContextMenu";
import CreateEventForm from "../CreateEventForm/CreateEventForm";

const isAdmin = false;

const handleContextMenu = (arg, itemList, setter) => {
  arg.el.addEventListener("contextmenu", (jsEvent) => {
    jsEvent.preventDefault();
    console.log(arg);

    let items = itemList.global;

    if (isAdmin) {
      items = [...items.admin, ...items.global];
    }

    setter({
      xPos: arg.el.offsetLeft + 360,
      yPos: arg.el.offsetTop + 100,
      date: arg.el.date,
      items,
    });
  });
};

const Calendar = () => {
  const dateCMenuItems = {
    global: [
      {
        label: "Copiar data/hora",
        action: () => alert("Copiar texto ou imagem clicada"),
        icon: <FaCopy />,
      },
      {
        label: "Criar Evento...",
        action: () => setIsModalOpen(true),
        icon: <FaPlus />,
      },
      {
        label: "Editar evento...",
        action: () => alert("Editar Evento clicada"),
        icon: <FaEdit />,
      },
      {
        label: "Apagar Evento",
        action: () => alert("Apagar Evento clicada"),
        icon: <FaTrash />,
      },
    ],
    admin: [
      {
        label: "Bloquear/desbloquear data",
        action: () => alert("Bloquear/desbloquear data clicada"),
        icon: <FaCalendar />,
      },
      {
        label: "Ocorrência do evento...",
        action: () => alert("Ocorrência do evento clicada"),
        icon: <FaCheckSquare />,
      },
    ],
  };

  // Render modals:
  const [loading, setLoading] = useState(false);
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
    <>
      {isModalOpen && <CreateEventForm defDate={"2024-08-12"} />}
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
          dayCellDidMount={(arg) =>
            handleContextMenu(arg, dateCMenuItems, setMenu)
          }
          events={eventList}
        />
        <div className="temp-wrapper d-flex flex-row justify-content-between">
          <BtnTriggerEvent
            text="Criar um evento"
            type="btn-primary"
            callback={createEvent}
          />
        </div>
      </section>
    </>
  );
};

export default Calendar;

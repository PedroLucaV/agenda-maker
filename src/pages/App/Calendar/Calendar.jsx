// Dependencies:
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

// Resources:
import ArrowPng from "../../../assets/images/left-facing-arrow.png";

// Stylesheets:
import "./Calendar.css";

const Calendar = () => {
  return (
    <section className="container calendar p-4 h-100 border-0 rounded-4">
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Olá mundo!', date: '2024-07-22' },
          { title: 'Aniversário da Empresa', date: '2024-07-02' }
        ]}
      />
    </section>
  );
};

export default Calendar;

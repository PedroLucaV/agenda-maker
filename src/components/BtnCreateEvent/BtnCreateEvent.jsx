/* eslint-disable react/prop-types */
// Helpers:
import createEvent from "../../tests/createEventTester";

// Stylesheet:
import "./BtnCreateEvent.css"

const BtnCreateEvent = ({text}) => {
  return <input
    className="btn btn-primary mb-4 ms-4"
    type="button" 
    value={text}
    onClick={() => createEvent()}
  />
}

export default BtnCreateEvent;
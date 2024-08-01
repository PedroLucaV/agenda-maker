/* eslint-disable react/prop-types */
// Helpers:
import createEvent from "../../../helpers/create-event-tester";

// Stylesheet:
import "./BtnCreateEvent.css"

const BtnCreateEvent = ({text, ref}) => {
  return <input
    className="btn btn-primary mb-4 ms-4"
    type="button" 
    value={text}
    onClick={() => createEvent(ref)}
  />
}

export default BtnCreateEvent;
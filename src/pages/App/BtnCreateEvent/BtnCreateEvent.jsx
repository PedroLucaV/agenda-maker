// Helpers:
import createEvent from "../../../helpers/create-event-tester";

// Stylesheet:
import "./BtnCreateEvent.css"

const BtnCreateEvent = ({text}) => {
  return <input
    className="btn btn-primary my-2"
    type="button" 
    value={text}
    onClick={createEvent}
  />
}
BtnCreateEvent.propTypes = {
  text: String.isRequired
}

export default BtnCreateEvent;
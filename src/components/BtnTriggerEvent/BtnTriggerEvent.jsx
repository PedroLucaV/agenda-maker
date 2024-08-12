/* eslint-disable react/prop-types */

// Stylesheet:
import "./BtnTriggerEvent.css"

const BtnTriggerEvent = ({text, type, callback}) => {
  return <input
    className={"btn "+ type +" mb-4 mx-4"}
    type="button" 
    value={text}
    onClick={() => callback()}
  />
}

export default BtnTriggerEvent;
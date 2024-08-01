import "./App.css";
import BtnCreateEvent from "./BtnCreateEvent/BtnCreateEvent";
import Calendar from "./Calendar/Calendar";

const App = () => {
  return <>
    <BtnCreateEvent text="Criar um evento" />
    <Calendar/>
  </>;
};

export default App;

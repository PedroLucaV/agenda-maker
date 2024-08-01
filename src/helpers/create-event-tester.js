const createEvent = (calendarRef) => {
  // Variables:
  let title, start, end, description;
  
  // Variable validations:
  do {
    title = prompt("Digite o nome do evento: ")
    if (!title) {
      let confirmWindow = confirm("Por favor, digite o nome do evento.")
      if (confirmWindow === false) {return}
    }
  } while (!title);

  do {
    start = prompt("Digite a data/hora de início: ")
    if (!start) {
      let confirmWindow = confirm("Por favor, digite no mínimo a data de início.")
      if (confirmWindow === false) {return}
    }
  } while (!start);

  do {
    end = prompt("Digite a data/hora de término: ")
    if (!end) {
      let confirmWindow = confirm("Por favor, digite no mínimo a data de término.")
      if (confirmWindow === false) {return}
    }
  } while (!end);

  do {
    description = prompt("Digite uma descrição para o evento: ")
    if (!description) {
      let confirmWindow = confirm("Por favor, digite no mínimo a data de término.")
      if (confirmWindow === false) {return}
    }
  } while (!description);
  
  // Calling the FullCalendar API
  const api = calendarRef.current.getApi()
  
  api.addEvent({
    id: 1,
    title,
    start,
    end,
    type: "Aula",
    description,
    backgroundColor: "#3dbdd4",
    borderColor: "#3dbdd4"
  })

  console.log(api.getEventById(1))
}

export default createEvent;
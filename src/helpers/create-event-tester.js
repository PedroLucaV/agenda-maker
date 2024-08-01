const createEvent = () => {
  let eventName, start, end;
  
  do {
    eventName = prompt("Digite o nome do evento: ")
    if (!eventName) {
      let confirmWindow = confirm("Por favor, digite o nome do evento.")
      if (confirmWindow === false) {return}
    }
  } while (!eventName)

  do {
    start = prompt("Digite a data/hora de início: ")
    if (!start) {
      let confirmWindow = confirm("Por favor, digite no mínimo a data de início.")
      if (confirmWindow === false) {return}
    }
  } while (!start)

  do {
    end = prompt("Digite a data/hora de término: ")
    if (!end) {
      let confirmWindow = confirm("Por favor, digite no mínimo a data de término.")
      if (confirmWindow === false) {return}
    }
  } while (!end)

  alert('Opa!')
}

export default createEvent;
import postEvent from "../api/addEvent";

const createEvent = () => {
  // Variables:
  let title, start, end, type, description;
  
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
    type = prompt("Digite o tipo do evento: ")
    if (!type) {
      let confirmWindow = confirm("Por favor, digite o tipo do evento.")
      if (confirmWindow === false) {return}
    }
  } while (!type);

  do {
    description = prompt("Digite uma descrição para o evento: ")
    if (!description) {
      let confirmWindow = confirm("Por favor, digite uma descrição para o evento.")
      if (confirmWindow === false) {return}
    }
  } while (!description);

  if (title && start && end && type && description) {
    const eventData = {
      titulo: title,
      descricao: description,
      categoria: type,
      data_marcada: start,
      data_termino: end,
      usuario_id: "4537c7bc-0d25-4b26-822f-384be08a131b"
    }
  
    postEvent(eventData);
  }
}

export default createEvent;
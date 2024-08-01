const onDateClick = (info, calendarRef) => {  
  const confQuery = confirm(`A data ${info.dateStr} foi clicada. Deseja fazer um agendamento nesse espaço de tempo?`)
  console.log(calendarRef)

  if (confQuery) {
    let eventTitle;

    do {
      eventTitle = prompt("Digite o nome do evento: ")
      if (!eventTitle) {
        let confirmWindow = confirm("Deseja continuar com a criação do evento?")
        if (confirmWindow === false) {return}
      }
    } while (!eventTitle)

    const api = calendarRef.current.getApi()

    api.addEvent({
      id: 1,
      title: eventTitle,
      date: info.dateStr,
      allDay: info.allDay
    })
  }
};

export default onDateClick;
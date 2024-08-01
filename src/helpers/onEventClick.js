const onEventClick = (event) => {
  alert(`Um evento foi clicado! \nNome: ${event.title}`);

  // Verificação para a criação de eventos:
  if (event.groupId == 'blocked') {
    console.log(`${event.startStr} - Dia bloqueado para a criação de eventos.`)
  }
};

export default onEventClick;
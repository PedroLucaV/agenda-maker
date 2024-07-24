const onEventClick = (info) => {
  console.log(info)
  alert(`Um evento foi clicado! \nNome: ${info.title}`);
};

export default onEventClick
const onDateClick = (date) => {  
  alert(`Uma data foi clicada! \nNome: ${date.dateStr}`);

  console.log(`${date.dateStr} - Dia livre para criar eventos.`)
};

export default onDateClick;
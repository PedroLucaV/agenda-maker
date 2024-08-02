import axios from "axios";

const getEventList = (setter) => {
  const baseUrl = "https://agenda-maker.onrender.com";

  axios
    .get(`${baseUrl}/appointments/agendamentos`)
    .then((response) => {
      const data = response.data;

      parseEventList(data, setter);
    })
    .catch((error) => {
      console.log(error);
    });
};

const parseEventList = (events, setter) => {
  const list = [];

  events.forEach((el) => {
    const event = {
      id: el.id,
      title: el.titulo,
      start: el.data_marcada.split("+")[0].replace(" ", "T"),
      end: el.data_termino.split("+")[0].replace(" ", "T"),
      extendedProps: {
        type: el.categoria,
        description: el.descricao,
        author: el.usuario_id,
      },
    };
    list.push(event);
  });

  setter(list);
};

export default getEventList;

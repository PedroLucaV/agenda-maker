import axios from "axios";

const postEvent = (eventData) => {
  const baseUrl = "https://agenda-maker.onrender.com";

  axios
    .post(`${baseUrl}/appointments/agendamentos`, eventData)
    .then((response) => {
      if (response.ok) {
        window.alert("[API] Evento criado com sucesso!")
      }

      const data = response.data;
      console.log(data)
    })
    .catch((error) => {
      console.log(error);
    });
}

export default postEvent;
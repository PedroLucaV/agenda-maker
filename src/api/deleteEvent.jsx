import axios from "axios";

const DeleteEvent = (eventId) => {
  const baseUrl = "https://agenda-maker.onrender.com";

  axios
    .delete(`${baseUrl}/appointments/agendamento/${eventId}`)
    .then((response) => {
      if (response.ok) {
        window.alert("[API] Evento removido com sucesso!")
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default DeleteEvent;
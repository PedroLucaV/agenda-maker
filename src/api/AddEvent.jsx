import axios from "axios";

const PostEvent = (eventData) => {
  const baseUrl = "https://agenda-maker.onrender.com";

  axios
    .post(`${baseUrl}/appointments/agendamentos`, eventData)
    .then((response) => {
      if (response.ok) {
        window.alert("[API] Evento criado com sucesso!");
      }

      const data = response.data;
      console.log(data);
    })
    .catch((error) => {
      const errorStatus = error.response.status;
      const statusText = error.response.data.message;

      console.log(errorStatus, statusText);
    });
};

export default PostEvent;

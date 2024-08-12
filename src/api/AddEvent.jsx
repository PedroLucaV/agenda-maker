import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostEvent = (eventData) => {
  const baseUrl = "https://agenda-maker.onrender.com";
  const navigate = useNavigate();

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
      const errorStatus = error.response.status;
      const statusText = error.response.data.message;
      
      console.log(errorStatus, statusText);
      return navigate("/error")
    });
}

export default PostEvent;
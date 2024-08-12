/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetEventList = (setter, loading, setLoading) => {
  const baseUrl = "https://agenda-maker.onrender.com";
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)

    axios
    .get(`${baseUrl}/appointments/agendamentos`)
    .then((response) => {
      const data = response.data;

      parseEventList(data, setter);
    })
    .catch((error) => {
      console.log(error)
      navigate("/error");
    })
    .finally(() => {
      setLoading(false)
    });
  }, [])
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

export default GetEventList;

// import { placeholder } from "../data/eventArrays";
// import { v4 as uuidv4 } from "uuid";

const getEventList = async () => {
  async function fetchData() {
    const baseUrl = "https://agenda-maker.onrender.com"
    const methods = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    }

    try {
      const response = await fetch(`${baseUrl}/appointments/agendamentos`, methods);

      if (!response.ok) {
        throw new Error("Falha em buscar os recursos do servidor.")
      }

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  fetchData();
}

export default getEventList;

// .then(res => {
//   if (!res.ok) {
//     throw new Error("[API] Erro na obtenção de uma resposta do servidor.")
//   }
//   return res.json()
// })
// .then(data => {
//   data.forEach(el => {
//     const event = {
//       id: el.id,
//       title: el.titulo,
//       start: el.data_marcada.split('+')[0].replace(" ","T"),
//       end: el.data_termino.split('+')[0].replace(" ","T"),
//       extendedProps: {
//         type: el.categoria,
//         description: el.descricao,
//         author: el.usuario_id
//       }
//     }
//     parsedEvents.push(event)
//   });
// })
// .catch(err => console.log(err))

// return parsedEvents

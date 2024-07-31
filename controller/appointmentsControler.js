import Appointments from "../models/Appointments.js";
import { v4 as uuidv4 } from 'uuid';
import dayjs from "dayjs";

export const listAppointments = async (req, res) => {
    try {
      const agendamentos = await Appointments.findAll();
      res.json(agendamentos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const createAppointments = async (req, res) => {
    const { titulo, descricao, categoria, data_marcada, data_termino, data_bloqueda, usuario_id } = req.body;
    const mes = dayjs(data_marcada.data_marcada).month();
  
    try {
      const newAppointment = await Appointments.create({
        id: uuidv4(),
        titulo,
        descricao,
        categoria,
        mes,
        data_marcada,
        data_termino,
        data_bloqueda,
        usuario_id
      });
  
      res.status(201).json(newAppointment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}

export const alterInfoAppointment =  async (req, res) => {
    const {id} = req.params;
    const {data_bloqueda} = req.body;
    try {
      const agendamento = await Appointments.findByPk(id);
      agendamento.data_bloqueda = data_bloqueda;
      await agendamento.save();
      res.json(agendamento)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

export const getByMonth = async (req, res) => {
  const {month} = req.params;
  try{
    const allDate = await Appointments.findOne({where: {mes: month}});
    res.json(allDate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
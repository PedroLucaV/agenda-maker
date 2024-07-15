import { Router } from "express";
import User from './models/User.js';
import Appointments from "./models/Appointments.js";
const router = Router();

router.get('/agendamentos', async (req, res) => { //retorna todos os agendamentos na base de dados
  try {
    const agendamentos = await Appointments.findAll();
    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
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

router.post('/agendamentos', async (req, res) => {
  const { titulo, descricao, categoria, data_marcada, data_termino, data_bloqueda, usuario_id } = req.body;

  try {
    const newAppointment = await Appointments.create({
      titulo,
      descricao,
      categoria,
      data_marcada,
      data_termino,
      data_bloqueda,
      usuario_id
    });

    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/usuario', async (req, res) => { //será substituida pelo microsoft
  const { id, nome, foto_usuario, email, senha, is_admin, telefone } = req.body;

  if (!id || !nome || !email || !senha) {
    return res.status(400).json({ message: "Os campos obrigatórios não foram preenchidos." });
  }

  try {
    const newUser = await User.create({
      id,
      nome,
      foto_usuario,
      email,
      senha,
      is_admin,
      telefone
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

router.get('/usuarios',async (req, res) => { //retorna todos os agendamentos na base de dados
  try {
    const usuarios = await User.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.put('/agendamento/:id', async (req, res) => {
  const {id} = req.params;
  const {data_bloqueda} = req.body;
  console.log(data_bloqueda)
  console.log(typeof data_bloqueda)
  try {
    const agendamento = await Appointments.findByPk(id);
    agendamento.data_bloqueda = data_bloqueda;
    await agendamento.save();
    res.json(agendamento)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

export default router;
import { Router } from "express";
import { alterInfoAppointment, createAppointments, listAppointments, getByMonth, deleteById } from "../controller/appointmentsControler.js";
const router = Router();

router.get('/agendamentos', listAppointments);

router.post('/agendamentos', createAppointments);

router.put('/agendamento/:id', alterInfoAppointment);

router.get('/agendamento/:month', getByMonth);

router.delete('/agendamento/:id', deleteById)

export default router;
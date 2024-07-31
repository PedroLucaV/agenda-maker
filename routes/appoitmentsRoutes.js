import { Router } from "express";
import { alterInfoAppointment, createAppointments, listAppointments, deleteAppointment, getByMonth } from "../controller/appointmentsControler.js";
const router = Router();

router.get('/agendamentos', listAppointments);

router.post('/agendamentos', createAppointments);

router.put('/agendamento/:id', alterInfoAppointment);

router.delete('/agendamento/:id', deleteAppointment);

router.get('/agendamento/:month', getByMonth);

export default router;
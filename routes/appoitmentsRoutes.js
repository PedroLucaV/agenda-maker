import { Router } from "express";
import { alterInfoAppointment, createAppointments, listAppointments, getByMonth } from "../controller/appointmentsControler.js";
const router = Router();

router.get('/agendamentos', listAppointments);

router.post('/agendamentos', createAppointments);

router.put('/agendamento/:id', alterInfoAppointment);

router.get('/agendamento/:month', getByMonth);

export default router;
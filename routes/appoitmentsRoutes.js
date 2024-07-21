import { Router } from "express";
import { alterInfoAppointment, createAppointments, listAppointments } from "../controller/appointmentsControler.js";
const router = Router();

router.get('/agendamentos', listAppointments);

router.post('/agendamentos', createAppointments);

router.put('/agendamento/:id', alterInfoAppointment)

export default router;
import { Router } from "express";
import { createUser, getAllUser } from "./controller/usersController.js";
const router = Router();
router.post('/criar', createUser)

router.get('/', getAllUser)

export default router;
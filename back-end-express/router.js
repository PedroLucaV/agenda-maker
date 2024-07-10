import { Router } from "express";
import User from './models/User.js';
const router = Router();

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['nome', 'senha']
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
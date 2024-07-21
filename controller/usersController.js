import User from './models/User.js';
import { v4 as uuidv4 } from 'uuid';

export const createUser = async (req, res) => {
    const {nome, foto_usuario, email, senha, is_admin, telefone } = req.body;
  
    if (!nome || !email || !senha) {
      return res.status(400).json({ message: "Os campos obrigatórios não foram preenchidos." });
    }
  
    try {
      const newUser = await User.create({
        id: uuidv4(),
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
}

export const getAllUser = async (req, res) => { 
    try {
      const usuarios = await User.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
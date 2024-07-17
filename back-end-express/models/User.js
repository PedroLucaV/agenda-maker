import { DataTypes } from '@sequelize/core';
import Appointments from './Appointments.js';
import sequelize from '../controller/dbconfig.js';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.CHAR(40),
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  foto_usuario: {
    type: DataTypes.STRING(1500),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.CHAR(60),
    allowNull: false
  },
  is_admin: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default User;
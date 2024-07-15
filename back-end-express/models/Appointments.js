import { DataTypes } from '@sequelize/core';
import sequelize from '../controller/dbconfig.js';

const Appointments = sequelize.define('appointments', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_marcada: {
      type: "TIMESTAMP",
      allowNull: false
    },
    data_termino: {
        type: "TIMESTAMP",
        allowNull: false
    },
    data_bloqueda: {
      type: DataTypes.CHAR(60),
      allowNull: false,
      defaultValue: false
    },
    usuario_id: {
        type: DataTypes.CHAR(40),
        references: 'users',
        referencesKey: 'id'
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  export default Appointments;

import sequelize from './config/dbconfig.js'

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    await sequelize.sync({ force: true }); //para remover ao lancar a aplicação o force:true
    console.log('Database synced!');
  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    await sequelize.close();
  }
})();

import { migrateDatabase } from './drizzle';

const init = async () => {
  await migrateDatabase();
  console.log('Banco de dados inicializado');
};

init().catch(console.error);

import { createConnection } from 'typeorm';
import 'dotenv/config';

async function create() {
  const connection = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
  });

  await connection.query(
    `INSERT INTO specialties(id,name) 
    values ('1','Alergologia'),('2','Angiologia'), 
    ('3', 'Buco maxilo'),('4', 'Cardiologia clínca'),
    ('5', 'Cardiologia infantil'),('6', 'Cirurgia cabeça e pescoço'),
    ('7', 'Cirurgia cardíaca'),('8', 'Cirurgia de tórax')`,
  );
  console.log('specialty created');
  await connection.close();
}

create().catch((err) => {
  console.log(err.message);
});

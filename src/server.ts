import { createConnection } from 'typeorm';
import UserEntity from './entities/user.entity';

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Fa123123@",
  database: "test-orm",
  entities: [
    // Parttent to load all entity from entities file 
    __dirname + "/entities/*.entity.ts"
    // we can use specifix class Entity like:
    // UserEntity
  ],
  synchronize: true,
})
.then((connection)=> {
  console.log(`create success`);
})
.catch((err)=> {
  console.log(err);
});
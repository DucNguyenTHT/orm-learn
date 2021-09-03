import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';
import { createConnection, getRepository } from 'typeorm';

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
.then(async (connection)=> {
  // const profile = new Profile()
  // profile.gender = "Male";
  // profile.photo = "data.jpg";
  // await connection.manager.save(profile);

  // const user = new User()
  // user.name = "ducnguyen";
  // user.profile = profile;
  // await connection.manager.save(user);
  
  const result = getRepository(User);
  const data = await result.find();
  console.log(data);

  connection.close();
})
.catch((err)=> {
  console.log(err);
});
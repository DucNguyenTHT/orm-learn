import { createConnection } from 'typeorm';
import { PhotoEntity } from './entities/photo.entity';
import { UserEntity } from './entities/user.entity';

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
  // way - 1
  // const photos1 = new PhotoEntity()
  // photos1.url = "/ahihi/data/truelove";
  // await connection.manager.save(photos1);

  // const photos2 = new PhotoEntity()
  // photos2.url = "/ahihi/data/faillave";
  // await connection.manager.save(photos2);

  // const user = new UserEntity();
  // user.name = "ducnguyen";
  // user.photos = [photos2,photos1];
  // await connection.manager.save(user);
  
  //way - 2
  // const user = new UserEntity();
  // user.name = "THT"; 
  // await connection.manager.save(user);

  // const photo1 = new PhotoEntity();
  // photo1.url = "/data/ahihi";
  // photo1.user = user;
  // await connection.manager.save(photo1);

  // const photo2 = new PhotoEntity();
  // photo2.url = "/data/ahuhu";
  // photo2.user = user;
  // await connection.manager.save(photo2);

  const userRepository = connection.getRepository(UserEntity);
  const users = await userRepository.find({ relations: ["photos"] });
  console.log(users);

  const photoRepository = connection.getRepository(PhotoEntity);
  const photos = await photoRepository.find({ relations: ["user"] });
  console.log(photos);

  connection.close();
})
.catch((err)=> {
  console.log(err);
});
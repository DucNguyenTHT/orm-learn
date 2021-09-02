import { createConnection } from 'typeorm';
import { ProfileEntity } from './entities/profile.entity';
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
.then( async (connection)=> {
  // const profile = new ProfileEntity();
  // profile.gender = "male";
  // profile.photo = "photo.png";
  // // await connection.manager.save(profile);

  // const user = new UserEntity()
  // user.name = "ducnguyen";
  // user.profile = profile;
  // await connection.manager.save(user);

  // const userRepository = connection.getRepository(UserEntity);
  // const users = await userRepository.find({ relations: ['profile'] })
  // console.log(users);

  // const users = await connection.getRepository(UserEntity)
  //   .createQueryBuilder("user")
  //   .leftJoinAndSelect("user.profile","profile")
  //   .getMany()
    
  // console.log(users);
  
  //egger option
  // const userRepository = connection.getRepository(UserEntity);
  // const result = await userRepository.find();
  // console.log(result);
  
  // const profiles = await connection
  // .getRepository(ProfileEntity)
  // .createQueryBuilder("profile")
  // .leftJoinAndSelect("profile.user", "user")
  // .getMany();
  // console.log(profiles);

  connection.close();
})
.catch((err)=> {
  console.log(err);
});
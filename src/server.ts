import 'reflect-metadata';
import { createConnection, getRepository } from 'typeorm';
import { CategoryEntity, ICategoryEntity } from './entities/Category.entity';
import { IPostEntity, PostEntity } from './entities/Post.entity';

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
  // console.log(`create success`);
  const categoryRepository = getRepository<ICategoryEntity>(CategoryEntity);

  const category1: Partial<ICategoryEntity> = {
    name: "Orms"
  }
  const newCategory1 = await categoryRepository.save(category1);
  const category2: Partial<ICategoryEntity> = {
    name: "Programming"
  }
  const newCategory2 = await categoryRepository.save(category2);
  
  const postEntity1 = {
    title: "Programming data post",
    text: "Nohope text",
    categories: newCategory1
  }
  const questionRepository = getRepository<IPostEntity>(PostEntity);
  await questionRepository.save(postEntity1);

  connection.close();
})
.catch((err)=> {
  console.log(err);
});
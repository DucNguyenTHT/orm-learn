import { Question } from './entities/Question.entity';
import { createConnection } from 'typeorm';
import { Category } from './entities/Category.entity';

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
  const category1 = new Category();
  category1.name = "ORMS";
  // await connection.manager.save(category1);

  const category2 = new Category();
  category2.name = "Programming";
  // await connection.manager.save(category2);

  const question = new Question();
  question.title = "How to ask questions?";
  question.text = "Where can I ask TypeORM-related questions?";
  question.categories = [category1,category2];

  await connection.manager.save(question);
  connection.close();
})
.catch((err)=> {
  console.log(err);
});
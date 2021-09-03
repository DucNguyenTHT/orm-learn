import { Question } from './entities/question.entity';
import { createConnection, getRepository } from 'typeorm';
import { Category } from './entities/category.entity';

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
.then(async(connection)=> {
  // const category1 = new Category();
  // category1.name = "category1";
  // await connection.manager.save(category1);
  // const category2 = new Category();
  // category2.name = "category2";
  // await connection.manager.save(category2);

  // const question = new Question();
  // question.text = "categoryTesting";
  // question.title = "category add in none inverse manytomany";
  // question.categories = [category1,category2];
  // const newQuest = await connection.manager.save(question);

  const data = getRepository(Question);
  const questions = await data.find({relations: ["categories"]});
  console.log(JSON.stringify(questions));

  connection.close();
})
.catch((err)=> {
  console.log(err);
});
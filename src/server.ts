import { createConnection, getConnection, getManager } from 'typeorm';
import { Category } from './entities/category.entity';
import { Post } from './entities/post.entity';
import { PostCategory } from './entities/postCategory.view.entity';

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
  const entityManager = getManager();

  const category1 = new Category();
  category1.name = "Cars";
  await entityManager.save(category1);

  const category2 = new Category();
  category2.name = "Airplanes";
  await entityManager.save(category2);

  const post1 = new Post();
  post1.name = "About BMW";
  post1.categoryId = category1.id;
  await entityManager.save(post1);

  const post2 = new Post();
  post2.name = "About Boeing";
  post2.categoryId = category2.id;
  await entityManager.save(post2);

  const postCategories = await entityManager.find(PostCategory);
  const postCategory = await entityManager.findOne(PostCategory, { id: 1 })

  console.log(postCategories);
  console.log(postCategory);
  connection.close();
})
.catch((err)=> {
  console.log(err);
});
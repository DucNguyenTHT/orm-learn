import { createConnection, getManager, Tree } from 'typeorm';
import { AdjacecyListEntity as Nest } from './entities/AdjacecyList.entity';
import { ClosureTableEntity } from './entities/ClosureTable.entity';
import { MaterialPathEntity } from './entities/MaterializedPath.entity';
import { NestedSetEntity } from './entities/NestedSetEntity.entity';

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
.then( async (connection) => {
  const manage = getManager()
  const a1 = new ClosureTableEntity();
  a1.name ="a1";
  await manage.save(a1);

  const a11 = new ClosureTableEntity();
  a11.name = "a11";
  a11.parent = a1;
  await manage.save(a11);

  const a12 = new ClosureTableEntity();
  a12.name = "a12";
  a12.parent = a1;
  await manage.save(a12);

  const a111 = new ClosureTableEntity();
  a111.name = "a111";
  a111.parent = a11;
  await manage.save(a111);

  const a112 = new ClosureTableEntity();
  a112.name = "a112";
  a112.parent = a11;
  await manage.save(a112);

  try {
    const trees = await manage.getTreeRepository(ClosureTableEntity).findTrees();
    console.log(JSON.stringify(trees));
  } catch (error) {
    console.log(error);    
  }
  
  connection.close();
})
.catch((err)=> {
  console.log(err);
});
import { createConnection } from 'typeorm';
import { ContentAbstractEntity } from './entities/abstract/content.abstact';

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Fa123123@",
  database: "test-orm",
  entities: [
    // Parttent to load all entity from entities file 
    __dirname + "/entities/*.entity.ts", ContentAbstractEntity
    // we can use specifix class Entity like:
    // UserEntity
  ],
  synchronize: true,
})
.then((connection)=> {
  console.log(`create success`);
  connection.close()
})
.catch((err)=> {
  console.log(err);
});
/*
table result ~~~~
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | int          | NO   | PRI | NULL    | auto_increment |
| title        | varchar(255) | NO   |     | NULL    |                |
| description  | varchar(255) | NO   |     | NULL    |                |
| size         | varchar(255) | YES  |     | NULL    |                |
| viewCount    | int          | YES  |     | NULL    |                |
| answersCount | int          | YES  |     | NULL    |                |
| type         | varchar(255) | NO   | MUL | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+
*/
import { Connection, ViewColumn, ViewEntity } from "typeorm";
import { Category } from "./category.entity";
import { Post } from "./post.entity";

@ViewEntity({
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("post.id","id")
    .addSelect("post.name","name")
    .addSelect("category.name","categoryName")
    .from(Post, "post")
    .leftJoin(Category,"category","category.id = post.categoryId")
})
export class PostCategory {
  @ViewColumn()
  id: number;
  
  @ViewColumn()
  name: string;

  @ViewColumn()
  categoryName: string;
}
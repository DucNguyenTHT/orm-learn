import { EntitySchema } from "typeorm";
import { CategoryEntity, ICategoryEntity } from "./Category.entity";

export interface IPostEntity {
  id: number;
  title: string;
  text: string;
  categories: (Partial<ICategoryEntity> & ICategoryEntity);
}

export const PostEntity = new EntitySchema<IPostEntity>({
  name: "post",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    }
  },
  relations: {
    categories: {
      type:"many-to-many",
      target: "category"
    }
  }
})

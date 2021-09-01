import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";

interface IPostEntitySchema {
  id: number;
  title: string;
  text: string;
  categories: EntitySchemaRelationOptions
}

export const PostEntity = new EntitySchema<IPostEntitySchema>({
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
      target: 'category'
    }
  }
})

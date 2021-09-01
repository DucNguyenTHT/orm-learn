import { EntitySchema } from "typeorm";

export interface ICategoryEntity {
  id: number;
  name: string;
}

export const CategoryEntity = new EntitySchema<ICategoryEntity>({
  name: "category",
  columns:{
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    }
  }
})
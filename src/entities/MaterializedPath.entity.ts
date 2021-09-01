import { Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";

@Entity()
@Tree("materialized-path")
export class MaterialPathEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @TreeChildren()
  children: MaterialPathEntity[];

  @TreeParent()
  parent: MaterialPathEntity;
}
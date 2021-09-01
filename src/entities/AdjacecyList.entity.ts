import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AdjacecyListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne((type)=> AdjacecyListEntity, (AdjacecyListEntity) => AdjacecyListEntity.children)
  parent: AdjacecyListEntity;

  @OneToMany((type)=> AdjacecyListEntity, (Category) =>  Category.parent)
  children: AdjacecyListEntity[];
}
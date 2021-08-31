import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({column: { type: "varchar", name: "type"}})
export class ContentAbstractEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title: string;

  @Column()
  description: string;
  
}
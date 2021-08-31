import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class ContentAbstractEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title: string;

  @Column()
  description: string;
  
}
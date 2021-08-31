import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ContentAbstractEntity } from "./abstract/content.abstact";

@Entity()
export class QuestionEntity extends ContentAbstractEntity{
  @Column()
  answersCount: number;
}
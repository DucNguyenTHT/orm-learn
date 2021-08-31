import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ContentAbstractEntity } from "./abstract/content.abstact";

@Entity()
export class PostEntity extends ContentAbstractEntity{
  @Column()
  viewCount: number;
}
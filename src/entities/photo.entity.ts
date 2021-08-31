import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ContentAbstractEntity } from "./abstract/content.abstact";

@Entity()
export class PhotoEntity extends ContentAbstractEntity {
  @Column()
  size: string;
}
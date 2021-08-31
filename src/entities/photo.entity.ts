import { ChildEntity, Column } from "typeorm";
import { ContentAbstractEntity } from "./abstract/content.abstact";

@ChildEntity()
export class PhotoEntity extends ContentAbstractEntity {
  @Column()
  size: string;
}
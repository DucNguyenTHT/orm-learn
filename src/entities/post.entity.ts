import { ChildEntity, Column } from "typeorm";
import { ContentAbstractEntity } from "./abstract/content.abstact";

@ChildEntity()
export class PostEntity extends ContentAbstractEntity{
  @Column()
  viewCount: number;
}
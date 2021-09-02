import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PhotoEntity } from "./photo.entity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(()=> PhotoEntity,(photo: PhotoEntity) => photo.user)
  photos: PhotoEntity[]
}
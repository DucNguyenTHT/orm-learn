import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProfileEntity } from "./profile.entity";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(type => ProfileEntity, 
    // { cascade: true } 
    // {eager: true}
    (profile: ProfileEntity) => profile.user
  )
  @JoinColumn()
  profile: ProfileEntity
}
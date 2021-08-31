import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import NameHelper from "./helper/name.helper";

@Entity({ name: 'user'})
class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column(()=> NameHelper)
  name: NameHelper

  @Column()
  isActive: boolean;
}

export default UserEntity;
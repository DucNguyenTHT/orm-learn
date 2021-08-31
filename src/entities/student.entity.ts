import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import NameHelper from "./helper/name.helper";

@Entity({ name: 'student'})
class StudentEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column(()=> NameHelper)
  name: NameHelper

  @Column()
  faculty: string;
}

export default StudentEntity;
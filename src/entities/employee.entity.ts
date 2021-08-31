import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import NameHelper from "./helper/name.helper";

@Entity({ name: 'employee'})
class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column(()=> NameHelper)
  name: NameHelper

  @Column()
  salary: number;
}

export default EmployeeEntity;
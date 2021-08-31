import { Column, Entity } from "typeorm";

@Entity()
class NameHelper {
  @Column()
  first: string;

  @Column()
  last: string;
}

export default NameHelper;
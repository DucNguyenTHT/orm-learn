import { Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";

@Entity()
@Tree("closure-table", {
  closureTableName: "entry_colsure_table",
  ancestorColumnName: (column) => "ancestor_" + column.propertyName,
  descendantColumnName: (column) => "descandant_" + column.propertyName,
})
export class ClosureTableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @TreeChildren()
  children: ClosureTableEntity[];

  @TreeParent()
  parent: ClosureTableEntity;
}
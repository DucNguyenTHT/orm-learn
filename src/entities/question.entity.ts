import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToMany((type)=> Category,(category: Category)=> category.questions)
  @JoinTable()
  categories: Promise<Category[]>
}

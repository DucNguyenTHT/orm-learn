import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category.entity";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToMany(type => Category, (category:Category) => category.questions, {
    // cascade: true // this feature will come with some issue about bugs and security
  })
  @JoinTable()
  categories: Category[]
}
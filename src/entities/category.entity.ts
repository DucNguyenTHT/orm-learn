import { Question } from './question.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @ManyToMany((type)=> Question, (question: Question)=> question.categories)
  questions: Promise<Question[]>
}
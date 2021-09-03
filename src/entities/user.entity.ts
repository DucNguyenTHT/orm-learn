import { Profile } from './profile.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  profileId: number;
  
  @OneToOne((type)=> Profile)
  @JoinColumn()
  profile: Profile;
}
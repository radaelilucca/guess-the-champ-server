import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "text",
    unique: true,
  })
  username: string;

  @Column("text")
  password: string;

  @Column({
    type: "int",
    nullable: true,
  })
  totalScore: number;

  @CreateDateColumn()
  createdAt: Date;
}

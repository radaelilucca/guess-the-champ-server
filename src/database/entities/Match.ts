import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { UserEntity } from "./User";

@Entity("matches")
export class MatchEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  champion: string;

  @Column("text")
  mode: string;

  @Column("text")
  subMode: string;

  @Column("int")
  score: number;

  @Column("text")
  randomAbilityId: string;

  @Column("text")
  userId: string;

  @Column("text")
  status: "in-progress" | "finished";

  @JoinColumn({
    name: "userId",
  })
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @CreateDateColumn()
  createdAt: Date;
}

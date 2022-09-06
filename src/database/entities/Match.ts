import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class MatchEntity {
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
  status: "in-progress" | "finished";

  @CreateDateColumn()
  createdAt: Date;
}

import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { MatchEntity } from "./Match";
import { UserEntity } from "./User";

@Entity("multiplayer-matches")
export class MultiplayerMatchEntity extends MatchEntity {
  @Column("text")
  winnerId: string;

  @JoinColumn({
    name: "winnerId",
  })
  @ManyToOne(() => UserEntity)
  winner: UserEntity;

  @Column("text")
  users: string;
}

import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { MatchEntity } from "./Match";
import { UserEntity } from "./User";

@Entity("single-player-matches")
export class SinglePlayerMachEntity extends MatchEntity {
  @Column("text")
  userId: string;

  @JoinColumn({
    name: "userId",
  })
  @ManyToOne(() => UserEntity)
  user: UserEntity;
}

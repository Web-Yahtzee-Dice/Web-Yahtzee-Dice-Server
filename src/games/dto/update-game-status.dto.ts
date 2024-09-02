import { IsNumber, IsEnum } from "class-validator";
import { GameStatus } from "../enums/game-status.enum";

export class UpdateGameStatusDto {
    @IsNumber()
    game_id:number; 

    @IsEnum(GameStatus,{message:"적절한 게임 상태를 입력해야 합니다.",})
    game_status: GameStatus;
  }
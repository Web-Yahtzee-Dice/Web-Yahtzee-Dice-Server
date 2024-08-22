import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './models/game.model';
import { db } from 'database';

@Injectable()
export class GamesService {
  async createGame(/*createGameDto: CreateGameDto*/) {
    // 생성할 임의 게임 엔티티를 설정, ID는 데이터베이스에서 만들어주니 속성 제거
    const newGame: Omit<Game,'game_id'> = {
      game_winner_id: null,
      game_status: 'wait',
      game_start_time: new Date(),
      game_end_time: null
    }
    try{
      const [game_id] = await db('games')
        .insert(newGame)
        
        return game_id;
    } catch(error){
      console.log('Error Create Game:',error);
      throw new Error('Cannot Make Game')
    }
  }

  findAll() {
    return `This action returns all games`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

}

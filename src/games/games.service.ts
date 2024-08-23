import { BadRequestException, HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Game } from './models/game.model';
import { db } from 'database';
import { CreateGameResponseDto } from './dto/create-game-response.dto';

@Injectable()
export class GamesService {
  async createGame() {
    // 생성할 임의 게임 엔티티를 설정, ID는 데이터베이스에서 만들어주니 속성 제거
    const newGame: Omit<Game, 'game_id'> = {
      game_winner_id: null,
      game_status: 'wait',
      game_start_time: new Date(),
      game_end_time: null
    }
    const [game_id] = await db('games')
      .insert(newGame)
    return new CreateGameResponseDto({
      id:game_id
    });
  }

  async findAllGames() {

    const games = await db('games').select('*');
    return games;
  }

  async findGameById(id: string) {

    const numericId = +id;
    // 숫자가 아닌 id 판별
    if (isNaN(numericId)) {
      console.error('Invalid Type of ID');
      throw new BadRequestException('Invalid Type of ID');
    }

    const game = await db('games').select('*').where('game_id', numericId).first();
    // ID에 해당하는 게임이 존재하지 않는경우
    if (!game) {
      console.error(`Game with ID ${numericId} not found`);
      throw new NotFoundException(`Game with ID ${numericId} not found`);
    }
    return game;

  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post('create')
  async createGame(/*@Body() createGameDto: CreateGameDto*/) {
    try{
      const game_id = await this.gamesService.createGame(/*createGameDto*/)
      return {ID : game_id};
    }catch(error){
      if(error.message === 'Cannot Make Game'){
        throw new HttpException(
          { message:'Cannot Create Game' }, HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        { message:'Internal Server Error' }, HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  @Get('search')
  async findAll() {
    const games = await this.gamesService.findAllGames();
    return games;
  }

  @Get('search/:id')
  async findGameById(@Param('id') id: string) {
    // 문자열로 받아, + 붙여서 숫자로 변환
    const game = await this.gamesService.findGameById(id);
    return game;
    
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.updateGame(+id, updateGameDto);
  }

}

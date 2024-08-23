import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post('create')
  async createGame(/*@Body() createGameDto: CreateGameDto*/) {
    const game_id = await this.gamesService.createGame(/*createGameDto*/)
    return {ID : game_id};
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

}

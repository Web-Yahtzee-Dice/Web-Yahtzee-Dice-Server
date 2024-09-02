import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { GamesService } from './games.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('games')
@ApiTags('Games API')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post('create')
  @ApiOperation({summary:"게임 생성 API", description:"두 유저가 플레이할 게임을 생성"})
  async createGame(/*@Body() createGameDto: CreateGameDto*/) {
    const game_id = await this.gamesService.createGame(/*createGameDto*/)
    return game_id;
  }

  @Get('search')
  @ApiOperation({summary:"게임 전체 조회 API", description:"생성된 모든 게임을 조회"})
  async findAll() {
    const games = await this.gamesService.findAllGames();
    return games;
  }

  @Get('search/:id')
  @ApiOperation({summary:"게임 단일 조회 API", description:"ID로 단일 게임을 조회"})
  async findGameById(@Param('id') id: string) {
    // 문자열로 받아, + 붙여서 숫자로 변환
    const game = await this.gamesService.findGameById(id);
    return game; 
  }

}

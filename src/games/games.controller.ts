import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { GamesService } from './games.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import path from 'path';
import { UpdateGameStatusDto } from './dto/update-game-status.dto';

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

  @Patch('update/:id/status')
  updateGameStatus(@Body() updateGameStatusDto:UpdateGameStatusDto){
    // 1. 해당 게임이 유저가 플레이하고 있는 게임인지 판단
    // 2. 해당 게임의 상태가 업데이트 하고자 하는 상태의 이전 상태인지 판단
    // 3. 게임 진행상태 업데이트
    // 4. 게임 상태 업데이트 여부 반환
  }

  @Patch('update/:id/winner')
  updateGameWinner(){
    // 1. 해당 게임에 특정 유저가 포함되어 있는지 판단
    // 2. 해당 게임의 상태가 진행중 - proceed인지 판단
    // 3. 게임 상태를 end로 업데이트하고 승자 업데이트 후 반환
  }

}

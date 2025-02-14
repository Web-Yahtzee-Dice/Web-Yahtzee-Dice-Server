import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DicesService } from './dices.service';
import { CreateDiceDto } from './dto/create-dice.dto';
import { UpdateDiceDto } from './dto/update-dice.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('dices')
@ApiTags('Dices API')
export class DicesController {
  constructor(private readonly dicesService: DicesService) {}

  @Post()
  create(@Body() createDiceDto: CreateDiceDto) {
    return this.dicesService.create(createDiceDto);
  }

  @Get()
  findAll() {
    return this.dicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiceDto: UpdateDiceDto) {
    return this.dicesService.update(+id, updateDiceDto);
  }

}
